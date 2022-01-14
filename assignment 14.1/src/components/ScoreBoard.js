import React from 'react';
const ScoreBoard = (props) => {
    return (
        // <div>
        //         ScoreBoard
        // </div>
        <div className="score">
            Player 1: <input type="text" value={props.p1} className="textBox"/>                
            Player 2: <input type="text" value={props.p2} className="textBox"/>
            Total : <input type="text" value={props.draw} className="textBox"/>
        </div>
    );
}

export default ScoreBoard;