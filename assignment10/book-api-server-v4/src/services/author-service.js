const {sequelize} = require('../data/connection');
const {Author, Book} = sequelize.models;

const getAllAuthors = async()=>{
    const authors = await Author.findAll();
    return authors;
}

const addAuthor = async(author)=>{
    const dbAuthor = await Author.create(author);
    return dbAuthor;
}

const getAuthorById = async(id)=>{
    const author = await Author.findOne({where: {id: id}});
    if(author)
        return author;
    else
        throw new Error("Couldn't find author'");       
}

const updateAuthorById = async (author, id) =>{
    const temp = await deleteAuthorById(id);
    const dbAuthor = await addAuthor(author);
    return dbAuthor;
}

const deleteAuthorById = async(id)=>{
    const temp = await Author.destroy({where: {id: id}});
    if(temp)
        return temp;
    else
        throw new Error("Couldn't find author to Delete");
}

const getBookByAuthorId = async(id)=>{
    const author = await Author.findOne({where: {id: id}});
    const name = author.name;
    const booksByAuthor = await Book.findAll({where: {author: name}});
    return booksByAuthor;
}

module.exports = {
    getAllAuthors,
    addAuthor,
    getAuthorById,
    updateAuthorById,
    deleteAuthorById,
    getBookByAuthorId
}