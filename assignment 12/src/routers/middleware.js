

const {ResponseError}=require('../utils/http');


const authorizeFor=(permission)=>{
    return(request, response, next) => {
        if(permission.includes(model.role))
            next();
        else
            return new ResponseError("Not Authorized",403);
    }
}

module.exports={
    authorizeFor,
};