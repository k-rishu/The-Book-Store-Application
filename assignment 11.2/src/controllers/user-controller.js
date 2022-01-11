const service=require('../services/user-service');

const getAllUser =async (request, response) => {
    try{
        const users = await service.getAllUser();
        response.json(users);
    }catch(error){
        response.status(400).json(error.message);
    }
}

const addUser =async (request, response) => {
    try{
        const user1 = await service.addUser(request.body);
        response.status(201).json({message:"User successfully added",User:user1});
    } catch(error){
        response.status(400).json({message: error.message});
    }
}

const loginUser =async (request, response) => {
    try{
        const user1 = await service.loginUser(request.body.username,request.body.password);
        response.status(200).json({message:"Login Successful",user1});
    }
    catch(error){
        response.status(400).json({message: error.message});
    }
}

const getUserByEmail =async (request, response) => {
    try{
        const user1 = await service.getUserByEmail(request.params.email);
        response.json(user1);
    }catch(error){
        response.status(404).json({message:error.message, email:request.params.email});
    }
}

const updateUserByEmail=async (request, response) => {
    try{
        var Uemail = request.params.email;
        const user1 = await service.updateUserByEmail(Uemail,request.body);
        response.status(200).json({message:`User with email ${Uemail} successfully updated`});
    }catch(error){
        response.status(404).json({message:error.message, email:request.params.email});
    }
}

const updateUserPwdByEmail =async (request, response) => {
    try{
        var Uemail = request.params.email;
        const user1 = await service.updateUserPwdByEmail(Uemail,request.body.password);
        response.status(200).json({message:`Password of User with email ${Uemail} successfully updated`});
    }catch(error){
        response.status(404).json({message:error.message, email:request.params.email});
    }
}

module.exports = {
    getAllUser,
    addUser,
    loginUser,
    getUserByEmail,
    updateUserByEmail,
    updateUserPwdByEmail
}