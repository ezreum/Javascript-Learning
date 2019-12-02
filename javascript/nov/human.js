class human{
    constructor(age,weight){
        this._age=age;
        this._weight=weight;
    }
    get age(){
        return this._age;
    }
    set age(value){
        this._age=value;
    }
    get weight(){
        return this._weight;
    }
    set weight(value){
        this._weight=value;
    }
    eat(){
        this._weight=this._weight+1;
    }
    run(){
        this._weight=this._weight-1;
    }
    showHumanBasis(box) {
        document.getElementById(box).innerHTML+="weight: "+this._weight+"---- age: "+this._age+"<br/>";
    }
    static showHumans(box,coleccionHumanos){
        
    }
}