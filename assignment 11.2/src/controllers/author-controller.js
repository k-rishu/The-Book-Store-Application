const service = require('../services/author-service');
const getAllAuthors = async (request, response) => {
    try{
        const authors=await service.getAllAuthors();
        response.json(authors);
    }catch(error){
        response.status(400).json(error.message);
    }
}

const addAuthor = async (request, response) => {
    try{
        const author1 = await service.addAuthor(request.body);
        response.status(201).json({message:"Author successfully added",Author:author1});
    } catch(error){
        response.status(400).json({message: error.message});
    }
}

const getAuthorById=async (request, response) => {
    try{
        const author1=await service.getAuthorById(request.params.id);
        response.json(author1);
    }catch(error){
        response.status(404).json({message:error.message, id:request.params.id});
    }
}

const updateAuthorById = async (request, response) => {
    try{
        var Aid = request.params.id;
        const author1 = await service.updateAuthorById(Aid,request.body);
        response.status(200).json({message:`Author with id ${Aid} successfully updated`});
    }catch(error){
        response.status(404).json({message:error.message, id:request.params.id});
    }
}

const deleteAuthorById = async (request, response)=>{
    try{
        var Aid = request.params.id;
        const author1 = await service.deleteAuthorById(Aid);
        response.status(200).json({message:`Author with id ${Aid} successfully deleted`});
    }catch(error){
        response.status(404).json({message:error.message, id:request.params.id});
    }
}

const getBookByAuthorId=async (request, response)=>{
    try{
        var Aid = request.params.id;
        const books = await service.getBookByAuthorId(Aid);
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