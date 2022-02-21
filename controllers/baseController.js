class BaseController {
    constructor(name, model, db){
        this.name = name
        this.model = model
        this.db = db
    }

    getMethod (req, res){
        // dummy functions
        return res.status(200).json({success: `This is my GET function in my ${this.name} controller`})
    }

    async postMethod (req, res){
        // dummy functions
        try{
        const { data } = req.body
        console.log(data)
        const output = await this.model.create({...data})
        return res.status(200).json({success: `This is my POST function in my ${this.name} controller`, output})
        } catch(err){
            return res.status(400).json({err})
        }
    }
}

module.exports = BaseController