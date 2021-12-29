function getNumberInput(id){
    this.element=document.getElementById(id);

    
    this.get = function(){
        return + this.element.value;
    },
    this.clear=function(){
        this.element.value='';
    },
    this.set=function(value){
        this.element.value=value;
    },
    this.getRawValue=function(){
        return this.element.value;a
    },
    this.isValid=function(){
        return !isNaN(this.element.value);
        

    }
}