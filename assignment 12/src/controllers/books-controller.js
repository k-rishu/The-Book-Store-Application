const service=require('../services/books-service');

const getAllBooks = async (request,response)=>{
    console.log("reached here 3");
    try{
        const books=await service.getAllBooks();
        response.json(books);
    }catch(error){
        response.status(400).json(error.message);
    }
};

const addBook=async (request, response) => {
    try{
        const book1=await service.addBook(request.body);
        response.status(201).json({message:"Book successfully added",Book:book1});
    } catch(error){
        response.status(400).json({message: error.message});
    }
}

const getBookByIsbn=async(request,response)=>{
    try{
        const book1=await service.getBookByIsbn(request.params.isbn);
        response.json(book1);
    }catch(error){
        response.status(404).json({message:error.message, isbn:request.params.isbn});
    }
}


const updateBook=async (request, response) => {
    try{
        var Bisbn = request.params.isbn;
        const book1 = await service.updateBook(Bisbn,request.body);
        response.status(200).json({message:`Book with isbn ${Bisbn} successfully updated`});
    }catch(error){
        response.status(404).json({message:error.message, isbn:request.params.isbn});
    }
}

const deleteBook=async (request, response) => {
    try{
        var Bisbn = request.params.isbn;
        const book=await service.deleteBook(Bisbn);
        response.status(200).json({message:`Book with isbn ${Bisbn} successfully deleted`});
    }catch(error){
        response.status(404).json({message:error.message, isbn:request.params.isbn});
    }
}

const getInPriceRange=async (request, response) => {
    try{
        var min = request.params.min;
        var max = request.params.max;
        const books = await service.getInPriceRange(min,max);
        response.status(200).json(books);
    }catch(error){
        response.status(404).json({message:error.message});
    }
}

const getInRatingRange=async (request, response) => {
    try{
        var min = request.params.min;
        var max = request.params.max;
        console.log(`min:${min} ans max:${max}`);
        const books = await service.getInRatingRange(min,max);
        response.status(200).json(books);
    }catch(error){
        response.status(404).json({message:error.message});
    }
}

module.exports={
    getAllBooks,
    getBookByIsbn,
    addBook,
    updateBook,
    deleteBook,
    getInPriceRange,
    getInRatingRange
}

