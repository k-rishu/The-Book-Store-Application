




function clearFields(){
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#price').value = '';
    document.querySelector('#cover').value = '';
    document.querySelector('#rating').value = '';
    document.querySelector('#description').value='';
}

 document.querySelector('#book-form').addEventListener('submit',(e) => {
    e.preventDefault();               
      let title = document.querySelector('#title').value;
      let author = document.querySelector('#author').value;
      let price = document.querySelector('#price').value;
      let cover = document.querySelector('#cover').value;
      let rating = document.querySelector('#rating').value;
      let description = document.querySelector('#description').value;


  
      if(title === '' || author === '' || price === '' || cover === '' || rating === ''|| description === ''){
          console.log('Please fill in all details...');
          alert('Please fill in all details...');
          clearFields();
      } else {
        let db;
        if(localStorage.getItem('bookList') === null) {
          db = [];
        } else {
          db = JSON.parse(localStorage.getItem('bookList'));
        }
        let book = new Book({title,author,price,cover, rating, description});
        db.push(book);
        document.forms[0].reset();
        //console.log({book});
        localStorage.setItem('bookList', JSON.stringify(db));
        clearFields();
      }
  
  });