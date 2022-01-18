import React from 'react';

const BookListComponent=({books, onCellClick})=>{
    //TODO: Initialize Here
    
    

    return (
        <div className='BookListScreen'>
            

            <div className="list-group">
                {books.map(book=>(
                    
                    <button key={book.isbn} className='list-group-item list-group-item-action' onClick={()=>{onCellClick(book.isbn)}}>
                       
                        {book.title}
                        
                    </button>
                ))}
            </div>

        </div>
    );
}

export default BookListComponent;


