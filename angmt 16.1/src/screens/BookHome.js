import React from 'react';
import Clock from '../components/Clock';

const BookHome=()=>{
    
    
    return(
        <div className='text-center'>
            
            <h1 className ='BookHome' >BookHome</h1>
            <div className='clock'>
                <Clock className='Clock'/>
            </div>
            
            <div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/51vgy3LMz6L._SX339_BO1,204,203,200_.jpg" class="img-fluid" alt="bookImg"></img>
            </div>

            <div className='quote'>
                <p>books are good he said sleep is better.</p>
            </div>
        </div>
        
    )
}
export default BookHome;