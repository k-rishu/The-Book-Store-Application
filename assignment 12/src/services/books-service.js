const {sequelize} = require('../data/connection');

//console.log('sequelize.models',sequelize.models);


const {ResponseError,ResponseMessage} = require('../utils/http');


//console.log('db',db);
const getAllBooks=async()=>{
    const {Book} =sequelize.models;
    //const result=await db.query('SELECT * FROM books');
    //console.log('result',result);

    const books=await Book.findAll();

    return books;

}

const getBookByIsbn=async(isbn)=>{
    const {Book} =sequelize.models;
    const book= await Book.findOne({where:{isbn:isbn}});
    if(book)
        return book;
    else
        //throw new Error('Book Not Found');
        throw new ResponseError('Book Not Found',404);
}

const addBook=async(book)=>{
    const {Book} =sequelize.models;
    const dbBook=await Book.create(book); //create and save to data base
    return new ResponseMessage(dbBook,201,{location:`/api/books/${dbBook.isbn}`});
}

const updateBook = async(isbn,book1)=>{
    const result = await deleteBook(isbn);
    const dbBook = await addBook(book1);
    return dbBook;
}

const deleteBook = async(isbn)=>{
    const result = await book.destroy({
        where:{
            isbn:isbn
        }
    });
    if(result)
        return result;
    else
        throw new Error(`Book does not exist`);
}

const getInPriceRange = async(min,max)=>{
    console.log(`min:${min} and max:${max}`);
    const books = await book.findAll({
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

const getInRatingRange = async(min,max)=>{
    const books = await book.findAll({
        where:{
            rating:{
                [Op.and]:{
                    [Op.gte]:min,
                    [Op.lte]:max
                }
            }
        }
    });
    return books;
}


module.exports={
    getAllBooks,
    getBookByIsbn,
    addBook,
    updateBook,
    getInRatingRange,
    getInPriceRange,
    deleteBook
}