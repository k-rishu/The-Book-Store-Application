const  arr = [2,3,9,11,8,15,4,17 ]; 
function  search (list,   match, index){ 
    let result=[]; 
    if(index===undefined){
    for( let value of list) { 
    if(match(value)){ 
        result.push(value); 
            } 
        }
    }
    else{ 
        for(let index = 0; index<list.length; index++){ 
            if(match(value)){
                result.push(value); 
             }
        }
    }
    return result; 
} 

const alt = search(arr, )

