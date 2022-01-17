import React from 'react';
import TitleButton from './TitleButtonComponent'

class AuthorListComponent extends React.Component{
    
    //TODO: Initialize Here

    render=()=>{
        return (
            <div className='AuthorListScreen'>
                <div className="list-group">
                    {this.props.authors.map((author,index)=>(    
                       <TitleButton key={author.id} index={index} title={author.name} onButtonClick={this.props.onButtonClick}/> 
                    ))}
                </div>

            </div>
        );
    }
}

export default AuthorListComponent;


