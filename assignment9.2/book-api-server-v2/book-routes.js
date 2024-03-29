const bookService=require('./book-service');
const {promisedReadableStream}=require('./utils');


module.exports = (app) => {


    app.get('/api/books', (request, response) => {

        response.send(bookService.getAllBooks());

    });

    app.post('/xapi/books/', (request, response) => {

        //console.log('request.body',request.body);

        let bookData= '';

        request.on('data',buffer=>bookData+=buffer.toString());

        request.on('end',()=>{
            const book=JSON.parse(bookData);

            console.log('book',book);
            //add logic to save this book
            if(bookService.getBookByIsbn(book.isbn)){
                response.status(400).send({message:'duplicate isbn'});
            }else{
                bookService.addBook(book);
                response
                    .status(201)  //created
                    .header('location', `http://localhost:4000/api/books/${book.isbn}`)
                    .send(book);
            }
        });
        
    });

    app.post('/api/books',async (request,response)=>{

        let bookData= await promisedReadableStream(request);
        const book = bookService.getBookByIsbn(bookData.isbn);
        if(book){
            response.status(400).send({message:`duplicate isbn:${bookData.isbn}`});
        } else{
            bookService.addBook(bookData);
                response
                    .status(201)  //created
                    .header('location', `http://localhost:4000/api/books/${bookData.isbn}`)
                    .send(bookData);
        }
    });



    app.get('/api/books/:isbn', (request, response) => {
        
        const isbn = request.params.isbn; //we automatically get
        console.log('get called for isbn',isbn);
        const book = bookService.getBookByIsbn(isbn);
        if (book)
            response.send(book);
        else
            response.status(404).send({ message: 'Book Not found', isbn });
    });

    app.delete('/api/books/:isbn', async(request,response)=>{
        const isbn = request.params.isbn;
        var book = bookService.getBookByIsbn(isbn);
        if(!book){
            response.status(400).send({message:`does not exist isbn:${isbn}`});
        }else{
            bookService.deleteBook(isbn)
            response
                .status(202)
                .send({message:`Deleted book by isbn: ${isbn}`});
        }

    });

    app.patch('/api/books',async (request,response)=>{

        let bookData= await promisedReadableStream(request);
        if(!bookService.checkBookbyISBN(bookData.isbn)){
            response.status(400).send({message:`does not exist isbn:${bookData.isbn}`});
        } else{
            bookService.updateBook(bookData);
                response
                    .status(201)  //created
                    .header('location', `http://localhost:4000/api/books/${bookData.isbn}`)
                    .send(bookData);
        }
    });



};


        // const {isbn}=request.params;
        // console.log('delete called for isbn',isbn);
        // response.send('deleteing book '+request.params.isbn);