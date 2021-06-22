class celulares {
    constructor(color,peso,rdp,rdc,ram) {
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.ram = ram;
        this.encendido = false;
    }
    BotonDeEncendido(){
        if (this.encendido == false) {
            alert("el telefono esta encendido")
            this.encendido = true;
        }else{
            alert("esta apagado")
            this.encendido = false;
        }
    }
    reiniciar(){
        if (this.encendido == true) {
            alert("se esta reiniciando")
        }
    }
    tomarFotos(){
        alert(`me tome una foto con una resolucion de ${this.resolucionDeCamara}`)
    }
    verVideo(){
        alert(`veo un video con una resolucion de ${this.resolucionDePantalla}`)
    }
}

celular1 = new celulares("es plateado","150g","1280p","full HD");
celular1 = new celulares();

/* celular1.BotonDeEncendido();
celular1.tomarFotos();
celular1.verVideo();
celular1.reiniciar();
celular1.BotonDeEncendido(); */