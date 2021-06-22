let free = false;

const Pasar_Invitados = (invitation)=>{
    let edad = prompt("ingrese su edad")
    if(edad > 17){
        if(invitation => 2 && invitation < 7 && free == false){
            alert(`los invitados que lleguen por primera vez a las ${invitation}:00 am pasas gratis` )
            free = true;
        }else{
            alert(`son las ${invitation}:00 am tienes que pagar`)
        }
    }else{
        alert("no puedes pasar eres menor de edad, a no ser que venga un adulto contigo")
    }
}

Pasar_Invitados(1);
Pasar_Invitados(2);
Pasar_Invitados(2.0);
Pasar_Invitados(3);
Pasar_Invitados(4.2);
Pasar_Invitados(6.0);
Pasar_Invitados(23);
Pasar_Invitados(24);

/* let free = false;

const Validar_Cliente = (time) =>{
    let edad = prompt("cual es tu eddad")
    if(edad > 17){
        if(time >= 2 && time < 7 && free == false){
            alert(`puedes pasar porque eres la primera persona a las ${time}:00 am`)
            free = true;
        }else{
            alert(`son las ${time}:00 horas puedes pasar pero tienes que pagar como quiera`)
        }
    }else{
        alert('heres menor papu no puedes pasar')
    }
}
Validar_Cliente(1);
Validar_Cliente(2);
Validar_Cliente(2.0);
Validar_Cliente(3);
Validar_Cliente(4.2);
Validar_Cliente(6.0);
Validar_Cliente(23);
Validar_Cliente(24);
 */





/* function saludar(nombre) {
    let frase = `hola ${nombre} como estas`
    document.write(frase)
} */
/* 
saludar("pedro") */

/* function operation(num1,num2) {
    let res = num1 + num2;
    return res

    
}

let resultado = operation(25,30)

document.write(resultado)
 */

/* function saludar() {
    alert("hola");
    return "<b>la funcion se ejecuta correctamente</b>"

}

let saludo = saludar()
document.write(saludo) */

/* function saludo() {

    respruesta = prompt("como te sientes");

    if(respruesta == "bien"){
    
        alert("me alegro")
    
    }else{
        alert("que mal, espero que se mejore")
    }

}

saludo()
saludo()
 */
    
