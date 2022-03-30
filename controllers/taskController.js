const BaseController = require('./baseController')

class TaskController extends BaseController{
    constructor({name, model, db}){
        super(name, model, db)
    }

    putMethod( req, res){
        return res.status(200).json({success: 'This is a PUT from my Task Controller!'})
    }
}

module.exports = TaskController