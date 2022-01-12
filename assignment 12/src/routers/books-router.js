const express= require('express');
// const {addBook,getAllBooks,getBookByIsbn,updateBook,deleteBook,getInPriceRange,getInRatingRange} =require('../controllers/books-controller');
// const {getReviewById, getAllReviews, updateReview, addReview, deleteReviewById} = require('../controllers/review-controller');
const {requestHandler} =require('../utils/http');
const service = require('../services/books-service');
const reviewService = require('../services/review-service');
const {authorizeFor} = require('./middleware');
const {authorize}=require('../services/user-service');

module.exports=()=>{

    //const router = express.Router();
    var router = express();
    router
        .route('/')
        .get(requestHandler(service.getAllBooks))
        .post(authorizeFor(["admin", "moderator"]), requestHandler(service.addBook));
    
    router
        .route("/:isbn")
        .get(requestHandler(service.getBookByIsbn))
        .put(authorizeFor(["admin", "moderator"]),requestHandler(service.updateBook))
        .delete(authorizeFor(["admin", "moderator"]),requestHandler(service.deleteBook));

    router
        .route("/pricerange/:min/:max")
        .get(requestHandler(service.getInPriceRange));
    
    router
        .route("/ratingrange/:min/:max")
        .get(requestHandler(service.getInRatingRange));
    
    router
        .route("/:isbn/reviews")
        .get(requestHandler(reviewService.getAllReviews))
        .post(authorize,requestHandler(reviewService.addReview));

    router
        .route("/:isbn/reviews/:id")
        .get(requestHandler(reviewService.getReviewById))
        .delete(requestHandler(reviewService.deleteReviewById));

        
    return router;
}; 