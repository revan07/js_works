pizza_anderson_dinero = prompt("cuanto dinero tiene para un pedazo de pizza")

if(pizza_anderson_dinero >= 30 && pizza_anderson_dinero < 50){
    alert("compra un pedaso de pizza de peperoni o jamon")
}else if(pizza_anderson_dinero >= 50 && pizza_anderson_dinero < 100){
    alert('compra una pizza de pollo')
}else if(pizza_anderson_dinero >= 100 && pizza_anderson_dinero < 150){
    alert("compra 3 pizza de peperoni y una botella de cocacola")
}else if (pizza_anderson_dinero >= 150 && pizza_anderson_dinero < 200){
    alert("compra 2 pedazo de pizza de pollo y una cocacola")
}else if (pizza_anderson_dinero >= 200 && pizza_anderson_dinero < 300){
    alert("compra una caja de pizza normal sin refresco mas salsa especial")
}else if (pizza_anderson_dinero >=300){
    alert("compra una caja de pizza grande con una cocacola grande")
}else {
    alert("no tienes nada de nada vete a cuerear maricon")
}
