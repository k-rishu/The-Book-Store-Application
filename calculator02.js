function createCalculator(){
    
    
    this.numbers = [],
    this.addNumber = function(number){
        if(!isNaN(number))
            this.numbers.push(number);
    },
    this.sum = function(){
        var result=0;
        for(var number of this.numbers)
            result+=number;

        return result;
    },
    this.average = function(){
        return this.sum()/this.numbers.length;
    },
    this.min = function(){
        var result=NaN;
        for(var number of this.numbers){
            if(isNaN(result)|| number<result) result=number;
        }
        return result;

    },
    this.clear = function(){
        this.numbers=[];
    }





}