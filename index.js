// Estructura if
let numeroIf = 5;

if (numeroIf > 0) {
  console.log("El número es positivo");
} else if (numeroIf < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es 0");
}

// Estructura while
let numeroWhile = 0;

while (numeroWhile < 3) {
  numeroWhile++;
  console.log(numeroWhile);
}

// Estructura do-while
let numeroDoWhile = 0;

do {
  numeroDoWhile++;
  console.log(numeroDoWhile);
} while (numeroDoWhile < 3);

// Estructura for
for (let numeroFor = 0; numeroFor <= 3; numeroFor++) {
  console.log(numeroFor);
}

// Estructura switch
let estacion = "invierno";

switch (estacion) {
  case "primavera":
    console.log("Estamos en primavera");
    break;
  case "verano":
    console.log("Estamos en verano");
    break;
  case "otoño":
    console.log("Estamos en otoño");
    break;
  case "invierno":
    console.log("Estamos en invierno");
    break;
  default:
    console.log("El valor no corresponde a ninguna estación");
}
