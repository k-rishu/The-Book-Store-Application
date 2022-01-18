import React from 'react';
import AuthorListComponent from '../components/AuthorListComponent';
import AuthorDetailsComponent from '../components/AuthorDetailsComponent';
let authorModule = require('../services/authors.js');


class AuthorListInfoScreen extends React.Component {

    authors = authorModule.authors
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        console.log(this.authors);
      }
  
      handleButtonClick=(idx)=>{
        const newauthor = this.state.authors[idx];
        this.setState({author:newauthor});
      }
      
      getInitialState=()=>{
        const s={
          authors:this.authors,
          author:this.authors[0],
        }
        return s;
      }

    render=()=>{
        console.log('reached');
        return (
            <div className='AuthorListInfoScreen'>
                <h1>Author Manager</h1>
  
                <div className='row'>
  
                    <div className='col col-3'>
                        <AuthorListComponent authors={this.authors} onButtonClick={this.handleButtonClick}/>
                    </div>
  
                    <div className='col col-9'>
                        <AuthorDetailsComponent author={this.state.author}/>
                    </div>
  
                </div>
                
            </div>
        );
      }
}

export default AuthorListInfoScreen;