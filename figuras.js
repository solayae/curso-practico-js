//Código del cuadrado

console.group("Cuadrado")

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

//Código del triangulo

console.group("Triángulo");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

//Código del círculo

console.group("Círculos");

const PI = Math.PI;

function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();

//Interacción con HTML

//Cuadrado

function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro)
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area)
}

//Triangulo

function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("inputTrianguloLado1");
  const input2 = document.getElementById("inputTrianguloLado2");
  const input3 = document.getElementById("inputTrianguloBase");
  const valor1 = Number(input1.value) ;
  const valor2 = Number(input2.value) ;
  const valor3 = Number(input3.value) ;
  const perimetro = perimetroTriangulo(valor1,valor2,valor3);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const input1 = document.getElementById("inputTrianguloBase");
  const input2 = document.getElementById("inputTrianguloAltura");
  const valor1 = Number(input1.value) ;
  const valor2 = Number(input2.value) ;
  const perimetro = areaTriangulo(valor1,valor2);
  alert(perimetro);
}

//Circulo

function calcularPerimetroCirculo() {
  const input1 = document.getElementById("inputRadioCirculo");
  const valor1 = Number(input1.value);
  const perimetro = perimetroCirculo(valor1);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const input1 = document.getElementById("inputRadioCirculo");
  const valor1 = Number(input1.value);
  const area = areaCirculo(valor1);
  alert(area);
}

// Triangulo isósceles

function calcularAreaIsosceles(ladoa, ladob, ladobase) {
  if (ladoa != ladob) {
    console.error("El lado A y el lado B no son iguales")
  } else {
    
  }
}