
// var numberInput=document
//             .getElementById('number');
// var numberList=document.getElementById('numberList');
// var consoleDiv=document.getElementById('console');



var operation = {
    numbers: [],
    numberInput:document.getElementById('number'),
    numberList:document.getElementById('numberList'),
    consoleDiv:document.getElementById('console'),

    addToList(){
        var value= this.numberInput.value;
    
        var number= + value; 
        if(!isNaN(number) && value){
            this.numbers.push(number);
            numberList.innerHTML+='<li>'+number+'</li>';
        } else {
            var p= document.createElement('p');
            p.append(document.createTextNode('Invalid Input:"'+value+'"'));
            this.consoleDiv.append( p);
        }
    },

    sum(){
        var result=0;
        for(var i=0; i<this.numbers.length; i++)
            result+=this.numbers[i];
    
        // this.consoleDiv.innerHTML+='<p> sum is :'+result+'</p>';
        return result;
    },
    printSum(){
        var res = this.sum();
        this.consoleDiv.innerHTML+='<p> sum is :'+res+'</p>';
    },
    average(){
        var result=this.sum()/this.numbers.length;
    
        //result/=numbers.length
        this.consoleDiv.innerHTML+='<p> Average is :'+result+'</p>';
    },

    findMin(){
        var lo=NaN;
        for(var number of this.numbers){
            if(isNaN(lo))
                lo=number; //only for first number
            else if(number<lo)
                lo=number;
        }
    
        this.consoleDiv.innerHTML+='<p> Min is :'+lo+'</p>';
    },

    reset(){
        console.log('clearing the UI');
        this.clearDisplay();    //clear UI
        this.number=[]; //clear memory
    },

    clearDisplay(){
    
        this.numberList.innerHTML='';
        this.consoleDiv.innerHTML='';
        this.numberInput.value='';
    }

}