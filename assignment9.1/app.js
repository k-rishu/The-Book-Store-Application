const express = require('express');
const fs = require('fs');

let bookdata = fs.readFile("books5.json", function (error, data){
    if(error) throw error;
    var books = JSON.parse(bookdata);

}); 


const app = express();

const port = 4000;

const server = app.listen(port, _=>{
    console.log(`server started: http://localhost:${port}`);
});

server.on('error', error=>console.error("error",error.message));

app.get('/api/books',(request, response)=>{
    response.send(books);
})

app.get('/api/books/:isbn',(request, response)=>{
    let data;
    const isbn = request.params.isbn;
    for(let book in books){
        if(book.isbn === isbn){
            data = book;
        }
    }
    response.send(data);
})