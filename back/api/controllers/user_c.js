/*** IMPORT */
const DB = require('../db.config')

/*** CTRL FUNC */
exports.getAllUsers = (req, res) => {
    DB.User.findAll()
        .then(users => res.json({data: users}))
        .catch(e => res.status(500).json({message: 'Database Error'}))
}

exports.getUser = async (req, res) => {
    try{
        let userId = parseInt(req.params.id)
        let user = await DB.User.findOne({where: {id: userId}})
        if(user == null){
            return res.status(404).json({message: 'This user does not exist !'})
        }
        return res.json({data: user})
    }catch(e){
        return res.status(500).json({message: 'Database Error'})
    }
}

// Commentaire
exports.addUser = async (req, res) => {
    const { email, password } = req.body
    
    if(!email || !password){
        return res.status(400).json({message: 'Missing Data'})
    }

    try{
        const user = await DB.User.findOne({ where: {email:email}, raw: true})
        if(user !== null){
            return res.status(409).json({message: 'This user already exists !'})
        }

        let useru = await DB.User.create(req.body)
        return res.status(201).json({message: 'User created', data: useru})
    }catch(e){
        return res.status(500).json({message: 'Database Error'})
    }
}

exports.modifyUser = async (req, res) => {
    try{
        let userId = parseInt(req.params.id)

        const user = await DB.User.findOne({where: {id: userId}, raw: true})
        if(user == null){
            return res.status(409).json({message: "This user does not exist !"})
        }
        await DB.User.update(req.body, {where: {id:userId}})
        return res.json({message: 'User Updated'})
    }catch(e){
        console.log(e)
        return res.status(500).json({message: 'Database Error'})
    }
}

exports.deleteUser = async (req, res) => {
    try{
        let userId = parseInt(req.params.id)
        await DB.User.destroy({where : {id: userId}})
        return res.status(204).json({})
    }catch(e){
        return res.status(500).json({message: 'Database Error'})
    }
}