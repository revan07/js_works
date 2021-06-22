class animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `soy un ${this.especie} mi edad es ${this.edad} mi color es ${this.color}`;
    }

    verinfo(){
        document.write(this.info)
    }
} 

let perro = new animal ("perro", "5", "rojo");

