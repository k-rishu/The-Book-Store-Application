import React from 'react';

const AddNewBook=()=>{
    
    
    return(
        <div className="BookHome">
            <h1>Add New Book</h1>
        
        <form>
        <fieldset>
          <div class="mb-3">
            <label for="disabledTextInput" class="form-label">ISBN</label>
            <input type="text" id="disabledTextInput" class="form-control" placeholder="isbn"/>
          </div>
          <div class="mb-3">
            <label for="disabledTextInput" class="form-label">Title</label>
            <input type="text" id="disabledTextInput" class="form-control" placeholder="title"/>
          </div>
          <div class="mb-3">
            <label for="disabledTextInput" class="form-label">Author</label>
            <input type="text" id="disabledTextInput" class="form-control" placeholder="author"/>
          </div>
          <div class="mb-3">
            <label for="disabledTextInput" class="form-label">Price</label>
            <input type="text" id="disabledTextInput" class="form-control" placeholder="0"/>
          </div>
          <div class="mb-3">
            <label for="disabledTextInput" class="form-label">Cover</label>
            <input type="text" id="disabledTextInput" class="form-control" placeholder="Cover"/>
          </div>
          <div class="mb-3">
            <label for="disabledTextInput" class="form-label">Description</label>
            <input type="text" id="disabledTextInput" class="form-control" placeholder="details"/>
          </div>
          
          
          <button type="submit" class="btn btn-primary">Submit</button>
        </fieldset>
      </form>
      </div>
        
    )
}
export default AddNewBook;