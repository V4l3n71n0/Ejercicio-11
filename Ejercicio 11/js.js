let diaSemana = prompt("¿Qué día de la semana es hoy?");
switch (diaSemana) {

case "lunes":
alert("Es Lunes: correr y ejercitarme 2hs, kickboxing y curso");
 break;

case "martes":
alert("Es Martes: caminata intensa 30´ y rutina de box");
 break;

case "miercoles":
alert("Es Miércoles: trote ligero 15´, rutina de brazos y abdominales, kickboxing y curso");
 break;

case "jueves":
alert("Es Jueves: correr 20´, rutina de piernas y abdominales.");
 break;

 case "viernes":
alert("Es Viernes: trote intenso 2 hs, rutina de brazo y piernas.");
 break;

case "sabado":
alert("Es Sabado: caminata ligera 1h, rutina completa, más boxeo.");
 break;

case "domingo":
alert("Es Domingo: rutina completa ligera, caminata tranquila 25´ para relajar.");
 break;

 default:
alert("Escribe el día de la semana en minúsculas y sin acentos.");
}

let numero1 = prompt('ingrese el primer numero del bucle.');
let numero2 = prompt('ingrese el segundo numero del bucle');

for(i = numero1; i <= numero2; i++){
    document.write('num elegido por usuario:' + i + "<br>");
}

for(i=20;i<=70;i++){
    document.write("El número es: " + i + "<br>");
}