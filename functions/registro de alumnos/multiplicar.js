const sumar = (num1,num2)=>{
return parseInt(num1) + parseInt(num2)
}
const restar = (num1,num2)=>{
    return parseInt (num1) - parseInt (num2);
}
const  multiplicar = (num1,num2)=>{
    return parseInt (num1) * parseInt (num2);
}
const dividir = (num1,num2)=>{
    return parseInt (num1) / parseInt (num2);
}

alert("que operacion deseas realizar");
let operacion = prompt("1: suma 2:restar 3:multiplicar 4:dividir");

if(operacion == 1){
    let numero1 = prompt("inserte el primer numero a sumar");
    let numero2 = prompt("inserte el segundo numero a sumar");
    let resultado = sumar(numero1,numero2);
    alert(`su resultado es ${resultado} `);
}else if (operacion == 2){
    let numero1 = prompt("inserte el primer numero a restar");
    let numero2 = prompt("inserte el segundo numero a restar");
    let resultado = restar(numero1,numero2);
    alert(`su resultado es ${resultado} `);
}else if(operacion == 3){
    let numero1 = prompt("inserte el primer numero a multiplicar");
    let numero2 = prompt("inserte el segundo numero a multiplicar");
    let resultado = multiplicar(numero1,numero2);
    alert(`su resultado es ${resultado} `);
}else if(operacion == 4){
    let numero1 = prompt("inserte el primer numero a dividir");
    let numero2 = prompt("inserte el segundo numero a dividir");
    let resultado = dividir(numero1,numero2);
    alert(`su resultado es ${resultado} `);
}else{
    alert("no hay ninguna operacion")
}