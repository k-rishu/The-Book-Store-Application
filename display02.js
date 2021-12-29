function createDisplay(id,wrapper){
    if(!wrapper)
        wrapper ="p";
    this.prefix="<"+wrapper+">"; //<p>
    this.suffix="</"+wrapper+">"; //</p>
    this.element=document.getElementById(id);
    
        this.add = function(value){
            this.element.innerHTML+=(this.prefix+value+this.suffix);
        },
        this.clear = function(){
            this.element.innerHTML='';
        }

    
}