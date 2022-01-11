const {sequelize} = require('../data/connection');



const getAllAuthors = async()=>{
    const {Author} = sequelize.models;
  //console.log("reached here service");
    const authors = await Author.findAll();
    return authors;
}

const addAuthor = async(author1)=>{
    const {Author} = sequelize.models;
    const dbAuthor = await Author.create(author1);
    return dbAuthor;
}

const getAuthorById = async(id)=>{
    const {Author} = sequelize.models;
    const author1 = await Author.findOne({where: {id: id}});
    if(author1)
        return author1;
    else
        throw new Error('Author Not Found');
}

const updateAuthorById = async(id,author1)=>{
    const result = await deleteAuthorById(id);
    const dbBook = await addAuthor(author1);
    return dbBook;
}

const deleteAuthorById = async(id)=>{
    const {Author} = sequelize.models;
    const result = await Author.destroy({
        where:{
            id:id
        }
    });
    if(result)
        return result;
    else
        throw new Error('Book does not exist');
}

const getBookByAuthorId = async(id)=>{
    const {Author,Book} = sequelize.models;
    const author1 = await Author.findOne({where: {id:id}});
    const authorname = author1.name;
    const allBooksByAuthor = await Book.findAll({where:{author:authorname}});
    return allBooksByAuthor;
}

module.exports = {
    getAllAuthors,
    addAuthor,
    getAuthorById,
    updateAuthorById,
    deleteAuthorById,
    getBookByAuthorId
}