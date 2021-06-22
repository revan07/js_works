array1 = ["maria","josefa","roberta"];
array2 = ["pedro","josefina",array1,"ramon"];

for(let array in array2){
if(array == 2){

    for(let array of array1){
        document.write(array + "<br>")

        if (array == "josefina"){
            continue;
        }
    }

}else{
    document.write(array2[array] + "<br>")
    }
}

/* for (let i = 0; i < 6; i++){
    
console.log(i)

/* if (i == 4){
    break;
} */
