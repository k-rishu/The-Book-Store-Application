const res = require('express/lib/response');
const service = require('../services/author-service');


const getAllAuthors = async (request,response)=>{
    try{
        const authors = await service.getAllAuthors();
        response.json(authors);
    }catch(err){
        response.status(400).json(error.message);
    }
}

const addAuthor=async (request,response)=>{
    try{
        const author = await service.addAuthor(request.body.author);
        response.status(201).json({message:"Authro added successfully", Author: author});
    }
    catch(err){
        response.status(400).json({message: err.message});
    }
}

const getAuthorById = async (request, response) => {
    try{
        const author = await service.getAuthorById(request.params.id);
        response.json(author);
    }
    catch(err){
        response.status(400).json({message: err.message});
    }
}


const updateAuthorById = async (request, response) => {
    try{
        var authorid = request.params.id;
        const author = await service.updateAuthorById(authorid,request.body);
        response.status(200).json({message:`Author with id ${authorid} successfully updated`});
    }catch(error){
        response.status(404).json({message:error.message, id:request.params.id});
    }
}

const deleteAuthorById = async (request, response)=>{
    try{
        var authorid = request.params.id;
        const author = await service.deleteAuthorById(authorid);
        response.status(200).json({message:`Author with id ${authorid} successfully deleted`});
    }catch(error){
        response.status(404).json({message:error.message, id:request.params.id});
    }
}

const getBookByAuthorId=async (request, response)=>{
    try{
        var authorid = request.params.id;
        const books = await service.getBookByAuthorId(authorid);
        response.status(200).json(books);
    }catch(error){
        response.status(404).json({message:error.message, id:request.params.id});
    }
}

module.exports = {
    getAllAuthors,
    addAuthor,
    getAuthorById,
    updateAuthorById,
    deleteAuthorById,
    getBookByAuthorId
}
