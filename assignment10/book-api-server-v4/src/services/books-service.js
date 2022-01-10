const {sequelize} = require('../data/connection');
const {Op} = require("sequelize");
//console.log('sequelize.models',sequelize.models);

const {Book} =sequelize.models;


//console.log('db',db);
const getAllBooks=async()=>{

    //const result=await db.query('SELECT * FROM books');
    //console.log('result',result);

    const books=await Book.findAll();

    return books;

}

const getBookByIsbn=async(isbn)=>{
    
    const book= await Book.findOne({where:{isbn:isbn}});
    if(book)
        return book;
    else
        throw new Error('Book Not Found');
}

const addBook=async(book)=>{

    //const dbBook=new Book(book);
    //await dbBook.save(); //this will save the book in the database    
    const dbBook=await Book.create(book); //create and save to data base
    return dbBook;
}

const deleteBook = async(isbn)=>{
    const book1 = await Book.destroy({
        where:{isbn:isbn}
    });
    if(book1)
        return book1;
    else
    throw new Error("Can't find Book to Delete");
}

const updateBook = async(isbn, book)=>{
    const book1 = await deleteBook(isbn, book);
    const dbBook = await addBook(book);
}

const getInPriceRange = async(min, max)=>{
    const books = await Book.findAll({
        where:{
            price:{
                [Op.and]:{
                    [Op.gte]:min,
                    [Op.lte]:max
                }
            }
        }
    });
    return books;
}


const getInRatingRange = async (min, max)=>{
    const books = await Book.findAll({
        where:{rating:{[Op.and]:{[Op.gte]:min, [Op.lte]:max}}}
    });
    return books;
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