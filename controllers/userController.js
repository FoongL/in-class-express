const BaseController = require('./baseController')

class UserController extends BaseController{
    constructor(name, model, db){
        super(name, model, db)
    }

    putMethod( req, res){
        return res.status(200).json({success: 'This is a PUT from my User Controller!'})
    }
}

module.exports = UserController