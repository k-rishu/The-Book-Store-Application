import React from 'react';


const Cell = ({value,onCellClick,id, winningSequence}) => {

    let handleCellClick=() => onCellClick(id);

    let style={};

    if(value==='_'){
      //  style.display = 'none';
       // style.visibility = 'hidden';
       //value = '';
       //style.visibility = 'protected';
       //style.opacity = '0.8';
       
    }

    if(value!=='_'){
        style.cursor='not-allowed';
        handleCellClick=null; //no event will be triggered.
    };
    if(winningSequence){
        const [x, y, z] = winningSequence;
        if(winningSequence.includes(id))
            style.backgroundColor = 'rgb(129, 245, 129)';
        else
            style.backgroundColor = "lightgray"
        style.cursor='not-allowed';
        handleCellClick=null;
    }

    //console.log('style: ',id, style);
    return (
        <button className='cell' style={style}
            onClick={handleCellClick}>
            {value}
        </button>
    );

}


export default Cell;