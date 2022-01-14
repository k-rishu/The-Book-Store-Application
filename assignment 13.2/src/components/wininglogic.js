// const len = 9;
// var arr = new Array(len).fill(-1);
// const zero = 0;
// const cross = 1;
// var flag = true;


// const computerFill=()=>{
//         let index = Math.floor(Math.random() * 9);
//         if(arr[index]==-1){
//             arr[index]=zero;
//             flag = !flag;
//         }
//         else
//             computerFill();   
// }

// const isWin=()=>{
//     if((arr[0]!=-1)&&(arr[0]==arr[1])&&(arr[0]==arr[2]))
//         return arr[0];
//     if((arr[0]!=-1)&&(arr[0]==arr[3])&&(arr[0]==arr[6]))
//         return arr[0];
//     if((arr[0]!=-1)&&(arr[0]==arr[4])&&(arr[0]==arr[8]))
//         return arr[0];   
//     if((arr[1]!=-1)&&(arr[1]==arr[4])&&(arr[1]==arr[7]))
//         return arr[1];
//     if((arr[2]!=-1)&&(arr[2]==arr[5])&&(arr[2]==arr[8]))
//         return arr[2];
//     if((arr[3]!=-1)&&(arr[3]==arr[4])&&(arr[3]==arr[5]))
//         return arr[3];
//     if((arr[6]!=-1)&&(arr[6]==arr[7])&&(arr[6]==arr[8]))
//         return arr[6];  
//     if((arr[6]!=-1)&&(arr[6]==arr[4])&&(arr[6]==arr[2]))
//         return arr[6];
    
// }

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
    for (let i = 0; i < 9; i++) {
        const [a, b, c] = board[i];
        if (cells[a] && cells[a] === cells[b] && cells[b] === cells[c]) {
            return cells[a];
        }
    }
    return null;
}

// const userFill=()=>{
//     flag = !flag;
// }

// const game=()=>{
//     if(falg){
//         computerFill();
//     }else
//         userFill();
    
//     if(!arr.includes(-1)){
//         console.log("Draw!");
//         return;
//     }

//     if(isWin()==cross){
//         console.log("Usee Won!");
//         return;
//     }
//     else if(isWin() == zero){
//         console.log("Computer Won!");
//         return;
//     }
// }