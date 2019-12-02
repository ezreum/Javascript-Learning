class human{
    constructor(name,surname,address, DOB, genre, postalCode){
        this._name=name;
        this._surname=surname;
        this._address=address;
        this._DOB=DOB;
        this._genre=genre;
        this._postalCode=postalCode;
    }

    get name(){
        return this._name;
    }
    set name(value){
        this._name=value;
    }
    get surname(){
        return this._surname;
    }
    set surname(value){
        this._surname=value;
    }
    get address(){
        return this._address;
    }
    set address(value){
        this._address=value;
    }
    get DOB(){
        return this._DOB;
    }
    set DOB(value){
        this._DOB=value;
    }
    get genre(){
        return this._genre;
    }
    set genre(value){
        this._genre=value;
    }

    get postalCode(){
        return this._postalCode;
    }
    set postalCode(value){
        this._postalCode=value;
    }

    showHumanBasis(box, human) {
        document.getElementById(box).innerHTML+="nombre: "+this._name+" apellidos: "+this._surname+" dirección: "+this._address;
        document.getElementById(box).innerHTML+=" edad: "+this._DOB+" codigo postal: "+this._postalCode;
    }
    static showHumans(box,humanColection){
        for (var person of humanColection) {
            document.getElementById(box).innerHTML+="nombre: "+this._name+" apellidos: "+this._surname+" dirección: "+this._address;
            document.getElementById(box).innerHTML+=" edad: "+this._DOB+" género: "+this._genre+" codigo postal: "+this._postalCode;
        }
    }
}