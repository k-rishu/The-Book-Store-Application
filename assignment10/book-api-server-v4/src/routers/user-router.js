
const express= require('express');
const {getAllUser,addUser,loginUser,getUserByEmail,updateUserByEmail,updateUserPwdByEmail} = require('../controllers/user-controller');

module.exports =()=>{
    const router  = express.Router();

    router
        .route("/")
        .get(getAllUser)
        .post(addUser);

    router
        .route("/login")
        .get(loginUser)

    router
        .route("/:email")
        .get(getUserByEmail)
        .put(updateUserByEmail)
        .patch(updateUserPwdByEmail);

    return router;
}