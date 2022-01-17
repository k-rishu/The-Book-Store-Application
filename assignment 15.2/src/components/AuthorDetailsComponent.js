import React from 'react';

const AuthorDetailsComponent = ({ author }) => {
    return (
        <div className='AuthorDetailsScreen'>
            <button className="list-group-item list-group-item-action active roundbutton">New Author</button>
            <div className='row'>

                <div className='col col-7'>
                <input className="form-control" type="text" value={author.name} aria-label="Disabled input example" disabled readonly/>
                <input className="form-control" type="text" value={author.id} aria-label="Disabled input example" disabled readonly/>
                <input className="form-control" type="text" value={author.photograph} aria-label="Disabled input example" disabled readonly/>
                <input className="form-control" type="text" value={author.biography} aria-label="Disabled input example" disabled readonly/>
                </div>

                <div className='col col-5'>
                    <img src={author.photograph} alt={author.title}/>
                </div>

            </div>
            <div className="Click-Button">
                <button className="list-group-item list-group-item-action active roundbutton">Update</button>
                <button className="list-group-item list-group-item-action  roundbutton">Cancel</button>
            </div>

        </div>
    );
}

export default AuthorDetailsComponent;