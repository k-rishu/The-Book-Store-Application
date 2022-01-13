import React from 'react';

const ScoreBoard = (props) => {
    return (
        // <div>
        //         ScoreBoard
        // </div>
        <span className="score">
            Win: <input type="text" value="2" className="textBox"/>                
            Draw: <input type="text" value="2" className="textBox"/>
            Total: <input type="text" value="4" className="textBox"/>
        </span>
    );
}

export default ScoreBoard;