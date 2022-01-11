const {sequelize} = require('../data/connection');
const {user} = sequelize.models;
const {Op} = require("sequelize");

const getAllUser = async () => {
    const users = await user.findAll();
    return users;
}

const addUser = async(user1) => {
    const dbUser=await user.create(user1); //create and save to data base
    return dbUser;
}

const loginUser = async (uname,pwd) => {
    const user1 = await user.findOne({
        where:{
            [Op.and]:{
                username:uname,
                password:pwd
            }
        }
    });
    if(user1)
        return user1;
    else 
        throw new Error('Invalid username or password');
}

const getUserByEmail = async (email) => {
    const user1= await user.findOne({
        where:{
            email:email
        }
    });
    if(user1)
        return user1;
    else
        throw new Error('User Not Found');
}

const updateUserByEmail = async (email,user1) => {
    const result = await user.destroy({
        where:{
            email:email
        }
    });
    const dbUser = await addUser(user1);
    return dbUser;
}

const updateUserPwdByEmail = async (email,pwd) => {
    const result = await user.update({password:pwd},{
        where: {
            email:email
        }
    });
    if(result[0])
        return result;
    else
        throw new Error('Invalid Email Id');
}

module.exports = {
    getAllUser,
    addUser,
    loginUser,
    getUserByEmail,
    updateUserByEmail,
    updateUserPwdByEmail
}
