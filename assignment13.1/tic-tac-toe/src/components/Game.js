import React from 'react';
import Status from './Status';
import Board from './Board';
import ScoreBoard from './ScoreBoard';

const Game=(props)=>{


    return (
            <div className='game'>
                <Status/>
                <ScoreBoard/>
                <Board/>
                <button className='button'>Reset</button>
            </div>
            );
            
}


export default Game;