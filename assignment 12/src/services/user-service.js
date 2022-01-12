// const {sequelize} = require('../data/connection');
// const {user} = sequelize.models;
// const {Op} = require("sequelize");

// const getAllUser = async () => {
//     const users = await user.findAll();
//     return users;
// }

// const addUser = async(user1) => {
//     const dbUser=await user.create(user1); //create and save to data base
//     return dbUser;
// }

// const loginUser = async (uname,pwd) => {
//     const user1 = await user.findOne({
//         where:{
//             [Op.and]:{
//                 username:uname,
//                 password:pwd
//             }
//         }
//     });
//     if(user1)
//         return user1;
//     else 
//         throw new Error('Invalid username or password');
// }

// const getUserByEmail = async (email) => {
//     const user1= await user.findOne({
//         where:{
//             email:email
//         }
//     });
//     if(user1)
//         return user1;
//     else
//         throw new Error('User Not Found');
// }

// const updateUserByEmail = async (email,user1) => {
//     const result = await user.destroy({
//         where:{
//             email:email
//         }
//     });
//     const dbUser = await addUser(user1);
//     return dbUser;
// }

// const updateUserPwdByEmail = async (email,pwd) => {
//     const result = await user.update({password:pwd},{
//         where: {
//             email:email
//         }
//     });
//     if(result[0])
//         return result;
//     else
//         throw new Error('Invalid Email Id');
// }

// module.exports = {
//     getAllUser,
//     addUser,
//     loginUser,
//     getUserByEmail,
//     updateUserByEmail,
//     updateUserPwdByEmail
// }


const { ResponseError, ResponseMessage } = require('../utils/http');
const { sequelize } = require('../data/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRound = 10;
const { getEnv } = require('../utils/env');

const createToken = (data) => {


    const token = jwt.sign(data,
        getEnv('JWT_SECRET'),
        {
            //expiresIn: '60s'//getEnv('JWT_EXPIRY')

        }
    );

    return token;


}


module.exports = {

    register: async ({ model }) => {
        model.password = await bcrypt.hash(model.password, saltRound);
        //console.log(model);

        const user = await sequelize.models.User.create(model);

        let data= { name: model.name, email: model.email, roles: model.roles, photo:model.photo }


        const token=createToken({data});
        return { status: "success", user: data, token };
    },

    login: async({model})=>{

        const user= await sequelize.models.User.findByPk(model.email);
        if(!user) 
            throw new ResponseError("Invalid credentials",401);

        const passwordResult= await bcrypt.compare(model.password,user.password);
        if(!passwordResult)
            throw new ResponseError("Invalid credentials",401);

        let data= { name: user.name, email: user.email, roles: user.roles, photo:user.photo }
        const token=createToken({data})
    
        return { status: "success", user: data, token };       

    },

    tokenChecker:(request,response,next)=>{
        
        console.log(request.headers);
        const authorization= request.headers["authorization"];

        if(authorization){
            const token= authorization.split(" ").pop(); //remove BEARER word

            jwt.verify(token,getEnv("JWT_SECRET"),(error,user)=>{

                if(error){
                    request.authneticationError=error;
                    console.log('invalid token', error.message);
                } else{
                    
                    request.user=user;
                    console.log('adding user to request', request.user);
                }

            });           

        } else{
            console.log('no token found in the request');
        }

        next();
    },

    authorize:async(request,response,next)=>{

        //this middleware will stop any unauthorized request.

        if(!request.user){
            // user is not authorized
            const data={
                message:"You are unauthorized to carry out this action",
                cause: request.authneticationError || "No authorization header found"
            }

            response.status(401).send(data);

        } else {
            next();  //OK! you can move to next action.
        }

    }

}