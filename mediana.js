let mediana;

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }

  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  function calcularMediana(lista1) {
    const mitadLista1 = parseInt(lista1.length / 2);
    if (esPar (lista1.length)){
    const elemento1 = lista1[mitadLista1];
    const elemento2 = lista1[mitadLista1 - 1];
    const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
    mediana = promedioElemento1y2;
    return(mediana);
  } else {
    mediana = lista1[mitadLista1];
    return(mediana);
  }
}


function calcularMediana(lista){
  //En la variable listaOrdenada está la lista que se ingresó como
  //argumento pero ordenada ascendentemente.
  const listaOrdenada = lista.sort(function(primerElemento, segundoElemento){
      return primerElemento - segundoElemento;
  });

  //Variable que almacena el índice que se encuentra a la mita de la lista.
  const mitadLista = parseInt(listaOrdenada.length / 2);

  //Variable que almacena el valor de la mediana.
  let mediana;

  //Verificar si la lista tiene n elementos par o impar.
  if(esPar(listaOrdenada.length)){
      const elemento1 = listaOrdenada[mitadLista - 1];
      const elemento2 = listaOrdenada[mitadLista];

      const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
      mediana = promedioElemento1y2;
      return mediana;
  }
  else{
      mediana = listaOrdenada[mitadLista];
      return mediana;
  }
}

function esPar(numerito){
  //Si es par...
  if(numerito % 2 === 0){
      return true;
  }
  //Si es impar...
  else{
      return false;
  }
}

function calcularMediaAritmetica(lista){
  const sumaLista = lista.reduce(
      function(valorAcumulado = 0, nuevoElemento){
          return valorAcumulado + nuevoElemento;
      }
  );

  const promedio = sumaLista / lista.length;
  return promedio;
}