const {sequelize} = require('../data/connection');



const getAllReviews = async()=>{
    const {Review} = sequelize.models;
    const reviews = await Review.findAll();
    return reviews;
}

const addReview = async(new_review)=>{
    const {Review} = sequelize.models;
    const db = await Review.create(new_review);
    return db;
}

const getReviewById = async(isbn,id)=>{
    const {Review} = sequelize.models;
    const reviews = await Review.findAll({
        where: {
            BookIsbn:isbn,
        }
    });
    //console.log("reviews are", reviews);
    const review1 = reviews.find(r=>r.id == id);    
    if(review1)
        return review1;
    else
        throw new Error("No review available");
}

const deleteReviewById = async(isbn, id)=>{
    const {Review} = sequelize.models;
    const reviews = await Review.findAll({
        where:{ BookIsbn:isbn }
    });
    const toDelete = reviews.find(r=>r.id == id);
    const del_review = await Review.destroy(toDelete);
    if(del_review){
        return del_review;
    } else
        throw new Error("review does not exist");
}

const deleteReview = async(isbn) => {
    const {Review} = sequelize.models;
    const curr_rev = await Review.destroy({
        where: {isbn:isbn}
    });
    if(curr_rev)
        return curr_rev;
    else
        throw new Error("review does not exist");
}

const updateReview = async(isbn, new_review)=>{
    const old_review = await deleteReview(isbn, new_review);
    const db = await addReview(new_review);
    return db;
}

module.exports = {
    getAllReviews,
    getReviewById,
    deleteReview,
    addReview,
    updateReview,
    deleteReviewById
}