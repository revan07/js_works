let cantidad = prompt ("cuantos alumnos son");
let AlumnosTotales = []

for(i = 0; i < cantidad; i++){
    AlumnosTotales[i] = [prompt("nombre del alumno " + (i+1)), 0];
}

const TomarAsistencia = (nombre,p)=>{
    let presencia = prompt("asistencia de cada alumno");
    if(presencia == p || presencia == "p"){
        AlumnosTotales[p][1]++;
    }
}

for (i = 0; i < 30; i++){
    for (alumno in AlumnosTotales){
        TomarAsistencia(AlumnosTotales[alumno][0],alumno);
    }
}

for(alumno in AlumnosTotales){
    let resultado = `${AlumnosTotales[alumno][0]}:<br>
    ______________Presentes : <b>${AlumnosTotales[alumno][1]}</b><br>
    ______________Ausencias : <b>${30 - AlumnosTotales[alumno][1]}</b>`;
    if (30 - AlumnosTotales[alumno][1] > 18){
        resultado+= "<b style= 'color:red'>REPROBADO POR INASISTENCIAS</b><br><br>";
    }else{
        resultado+= "<br><br>"
    }
    document.write(resultado)
}