import React from 'react';
const ScoreBoard = (props) => {
    return (
        // <div>
        //         ScoreBoard
        // </div>
        <span className="score">
            Win: <input type="text" value={props.win} className="textBox"/>                
            Draw: <input type="text" value={props.draw} className="textBox"/>
            Total: <input type="text" value={props.win + props.draw} className="textBox"/>
        </span>
    );
}

export default ScoreBoard;