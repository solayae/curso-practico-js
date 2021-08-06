function calcularDescuento(precioOriginal, porcentajeDescuento) {
  const porcentajePrecioConDescuento = 100 - porcentajeDescuento;
  const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;
  return(precioConDescuento);
}

function calcularPrecioConDescuento() {
  const input1 = document.getElementById("inputValor");
  const input2 = document.getElementById("inputDescuento");
  const valor1 = Number(input1.value);
  const valor2 = Number(input2.value);
  const precioFinal = calcularDescuento(valor1,valor2);
  const valueResult = document.getElementById("valueResult");
  valueResult.innerText = `El precio a pagar es de $${precioFinal}`;
}