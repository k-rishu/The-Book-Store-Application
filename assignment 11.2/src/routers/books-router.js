const express= require('express');
const {addBook,getAllBooks,getBookByIsbn,updateBook,deleteBook,getInPriceRange,getInRatingRange} =require('../controllers/books-controller');
const {getReviewById, getAllReviews, updateReview, addReview, deleteReviewById} = require('../controllers/review-controller');

module.exports=()=>{

    //const router = express.Router();
    var router = express();
    router
        .route('/')
        .get(getAllBooks)
        .post(addBook);
    
    router
        .route("/:isbn")
        .get(getBookByIsbn)
        .put(updateBook)
        .delete(deleteBook);

    router
        .route("/pricerange/:min/:max")
        .get(getInPriceRange);
    
    router
        .route("/ratingrange/:min/:max")
        .get(getInRatingRange);
    
    router
        .route("/:isbn/reviews")
        .get(getAllReviews)
        .post(addReview);

    router
        .route("/:isbn/reviews/:id")
        .get(getReviewById)
        .delete(deleteReviewById);

        
    return router;
}; 