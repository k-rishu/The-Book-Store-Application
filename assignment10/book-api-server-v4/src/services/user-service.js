const {sequelize} = require('../data/connection');
const {User} = sequelize.models;
const {Op} = require("sequelize");


const getAllUser = async()=>{
    const users = await User.findAll();
    return users;
}

const addUser = async(user)=>{
    const dbUser = await User.create(user);
    return dbUser;
}

const loginUser = async(uname, pswd)=>{
    const user = await User.findOne({
        where:{[Op.and]:{username:uname, password:pswd}}
    });
    if(user)
        return user;
    else
        throw new Error(`Invalid username or passowrd`);
}

const getUserByEmail = async(email) => {
    const user = await User.findOne({where:{email:email}});
    if(user)
        return user;
    else
        throw new Error("user Do not Exist!");
}

const updateUserByEmail = async(email, user) => {
    const user1 = await User.destroy({where:{email:email}});
    const dbUser = await addUser(user);
    return dbUser;
}

const updateUserPwdByEmail = async(email, pswd) => {
    const user = await User.update({password:pswd},{where: {email:email}});
    if(user[0])
        return user;
    else
        throw new Error('Invalid Email');
}


module.exports = {
    getAllUser,
    addUser,
    loginUser,
    getUserByEmail,
    updateUserPwdByEmail,
    updateUserByEmail
}