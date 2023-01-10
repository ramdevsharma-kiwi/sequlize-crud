const User = require('../models/user')


module.exports.addUser = async(req,res)=>{
    postData = req.body;
    if(postData.length>1){
         newUser = await User.bulkCreate(postData)
    }
    else{
         newUser = await User.create(postData)
    }
    res.status(200).json({data : newUser})
   
}

module.exports.getUser = async(req,res)=>{
    const newUser = await User.findAll({})
    res.status(200).json({data : newUser})
    
}
module.exports.getUserbyid = async(req,res)=>{

    const newUser = await User.findOne({
        where :{
            id : req.params.id
        }
    })
    res.status(200).json({data : newUser})
    
}


module.exports.deleteUser = async(req,res)=>{

const newUser = await User.destroy({
where :{
id : req.params.id
}
})
res.status(200).json({data : newUser})
}

module.exports.updateUser = async(req,res)=>{
let updateData = req.body
const newUser = await User.update(updateData,{
where :{
id : req.params.id  
}
})
res.status(200).json({data : newUser})
}