function createApp(){

    var calculator= new createCalculator();
    var console= new createDisplay('console');
    var list= new createDisplay('numberList','li');
    var input= new getNumberInput('number');

    return {
        handleAddToList:function(){
            if(input.isValid()){
                var number = input.get();
                calculator.addNumber(number);
                list.add(number);
            } else {
                console.add('invalid input:'+input.getRawValue());
            }
        },
        handleSum:function(){
            var sum=calculator.sum();
            console.add('sum is '+sum);
        },
        handleAverage:function(){
            var average=calculator.average();
            console.add('average is'+average);
        },
        handleMin:function(){
            var min=calculator.min();
            console.add('min is'+min);
        },
        handleClear:function(){
            console.clear();
            input.clear(),
            list.clear()
        },
        handleReset:function(){
            this.handleClear();
            calculator.clear();
        }

    }


}

var app=createApp();

