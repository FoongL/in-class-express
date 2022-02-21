const bcrypt = require('bcrypt')
const BaseController = require('./baseController')
const { PW_SALT_ROUND, JWT_SALT } = process.env
const jwt = require('jsonwebtoken')

class UserController extends BaseController {
    constructor(name, model, db) {
        super(name, model, db)
    }

    putMethod(req, res) {
        return res.status(200).json({ success: 'This is a PUT from my User Controller!' })
    }

    //HACKABLE ROUTE
    async findOne(req, res) {
        const { name: id } = req.body
        const result = await this.db.sequelize.query(`SELECT * FROM users WHERE id = ${id}`)
        return res.status(200).json({success: true, output: result[0]})
    }


    async signup(req, res) {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(500).json({ msg: 'You are an idiot' })
        }
        const hash = await bcrypt.hash(password, Number(PW_SALT_ROUND))
        const newUser = await this.model.create({ name, email, password: hash })
        const payload = {id: newUser.id, email: newUser.email}
        const token = jwt.sign(payload, JWT_SALT, {expiresIn:'5mins'})
        return res.status(200).json({newUser, token})
    }


    async login(req, res) {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(500).json({ msg: 'You are an idiot' })
        }
        const user = await this.model.findOne({where: {email}})
        if(!user){
            res.status(404).json({err: 'user not found'})
        }
        const compare = await bcrypt.compare(password, user.password)

        if (compare){
            const payload = {id: user.id, email: user.email}
            const token = jwt.sign(payload, JWT_SALT, {expiresIn:'5mins'})
            return res.status(200).json({success: true, token})
        }
        return res.status(401).json({error: "wrong password"})
    }


}

module.exports = UserController