import React from 'react';
import Status from './Status';
import Board from './Board';
import Button from './Button';
import ScoreBoard from './ScoreBoard';
//import calculateWinner from './wininglogic';

var p1 = 0;
var p2 = 0;
var draw = 0;
var data = [];

class Game extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        
    }
   

   

    handleCellClick = (id)=>{
        const cells= [...this.state.cells];
        if(cells[id]!=="_")
            return ;
        const winner = calculateWinner(cells);
        if(winner){
            //console.log("Winner is"+this.state.next);
            
            return;
        }
        
        cells[id]=this.state.next;
        const move = this.state.move + 1;
        const next = this.state.next === 'O'?'X':'O';
        data.push({id, move, next});
        this.setState({cells, next, move});
        //console.log('cell Clicked', id);
        //console.log('move', move);
    }

    getInitialState=(id)=>{
        return {
            cells:['_','_','_',
                   '_','_','_',
                   '_','_','_'], 
            next:'O',
            move:0,
        }
    }

    handleReset = (move, cells)=>{
        const cell= [...cells]; 
        const winner = calculateWinner(cell);
        if(winner || move == 9){
            draw += 1;
            this.setState(this.getInitialState());
        }                                                  // {automatically getting called. }
        // console.log('move is', move);
        // if(move === 9)
       // this.setState(this.getInitialState());
    }

    render=()=>{
        const cells = this.state.cells;
        const winner = calculateWinner(cells);
        if(winner){
            if(winner === 'X')
                p1 += 1;
            else if(winner === 'O')
                p2 += 1;
            console.log("winner is "+winner);
        }


        return (
            <div className='game'>
                <ScoreBoard p1={p1} p2={p2} draw={draw}   />
                <Status next={this.state.next}/>
                <Board cells={this.state.cells} onCellClick={this.handleCellClick}/>
                <ul>
                    {
                        data.map(val=><li>
                            <div>ID: {val.id}
                                Move: {val.move}
                                Player: {val.next}
                            </div>
                        </li>)
                    }
                </ul>
                <Button onCellClick={this.handleReset} cells={this.state.cells} move={this.state.move}/>
            </div>
        )
    }

}

function calculateWinner(cells) {
    const board = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < 8; i++) {
        const [a, b, c] = board[i];
        if (cells[a]!=='_' && cells[a] === cells[b] && cells[b] === cells[c]) {
            return cells[a];
        }
    }
    return null;
}

export default Game;