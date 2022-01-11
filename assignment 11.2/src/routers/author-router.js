const express= require('express');
const {getAllAuthors,addAuthor,getAuthorById,updateAuthorById,deleteAuthorById,getBookByAuthorId} = require('../controllers/author-controller');

module.exports=()=>{

    const router = express.Router();
    router
        .route("/")
        .get(getAllAuthors)
        .post(addAuthor);


    router
        .route("/:id")
        .get(getAuthorById)
        .put(updateAuthorById)
        .delete(deleteAuthorById);
        
    router
        .route("/:id/books")
        .get(getBookByAuthorId)

    return router;
};


