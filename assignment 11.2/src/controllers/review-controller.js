const req = require('express/lib/request');
const res = require('express/lib/response');
const service = require('../services/review-service');

const getAllReviews = async (req, res) => {
    try{
        const reviews = await service.getAllReviews();
        res.json(reviews);
    }catch(err){
        res.status(400).json(err.message);
    }

};

const updateReview = async (req, res) => {
    try{
        var iisbn = request.params.isbn;
        const rev = await service.updateReview(iisbn, req.body);
        res.status(200).json({message: `Review with isbn ${iisbn} updated`});
    }catch(error){
        res.status(404).json({message: error.message});
    }
};

const getReviewById =async (request, response) => {
    try{
        const review1 = await service.getReviewById(request.params.isbn, request.params.id);
        response.json(review1);
    }
    catch(error){
        response.status(404).json({message:error.message});
    }
};

const addReview = async (req, res)=>{
    try{
        const new_review = await service.addReview(req.body);
        res.status(201).json({message:"review added!"});
    }catch(err){
        res.status(400).json({message:error.message});
    }
}

const deleteReviewById =async (request, response) => {
    try{
        const del_review = await service.deleteReviewById();
        res.status(204).json({message:"review deleted!"});
    }catch(e){
        res.status(404).json({message: e.message});
    }
}

module.exports={
    getReviewById,
    getAllReviews,
    updateReview,
    addReview,
    deleteReviewById,
}