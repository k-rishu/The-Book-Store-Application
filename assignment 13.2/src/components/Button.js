import React from 'react';

const Button=(props)=>{

    return (
            <button className='reset-button' 
                onClick={() => props.onCellClick(props.move, props.cells)}>
                Reset
            </button>
            );
            
}


export default Button;