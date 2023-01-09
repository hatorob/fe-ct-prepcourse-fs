/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[(array.length) - 1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   array.forEach( (element,i) => {  
      array[i] = element + 1;
   });
   return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   let a = palabras.join(' ');
   return a;
}


function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar True si está, o False si no está.
   // Tu código:
   for (let i = 0; i < array.length; i++) {
     console.log(i);
     /* if(array[i] == elemento){
        return true;
     } else {
        return false;
     } */
     return array[i] == elemento ? true: false;
   }
   
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let suma = 0;
   arrayOfNums.forEach((elemento) => {
      suma = suma + elemento;
   })
   return suma;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let notas = 0;
   let promedioNotas = 0;
   resultadosTest.forEach((elemento) => {
      notas = notas + elemento;
   })
   promedioNotas = notas / resultadosTest.length;
   return promedioNotas;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   return Math.max(...arrayOfNums);
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   let array = Object.values(arguments);
   if( array.length ) {
      let resultadoMultiplicacion = 1;
      array.forEach(element => {
            resultadoMultiplicacion = resultadoMultiplicacion * element;
      });
      return resultadoMultiplicacion;
   } else {
      return 0;
   }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var result = array.map( (numeros,i) => {
   	if(numeros > 18) {
      return numeros;
    } 
   });
   var resultFinal = result.filter( arrayNuevo => {
      return (arrayNuevo !== undefined);
   })
  return resultFinal.length;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:

   switch (numeroDeDia)
   {
      case 1:
      case 7:
         return "Es fin de semana";
         break;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
         return "Es dia laboral";
         break;
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar True si el entero inicia con 9 y False en otro caso.
   // Tu código:
   var str= num.toString();
   var arr= str.split('');

   return (arr[0] == 9) ? true : false;
   
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar True.
   // Caso contrario retornar False.
   // Tu código:

   for(var i=0; i < array.length; i++) {
      //console.log(i,array.length)
      var tamañoArray = array.length - 1;
       if(array[i] === array[i + 1]) {
          var siSonIguales = true;
       } else if(array[tamañoArray] === array[i]) {
         siSonIguales = true;
       } else {
          var noSonIguales = true;
       }
    }
 
    if(noSonIguales) return false;
    if(siSonIguales) return true; 

   
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let nuevoArray = [];
   array.forEach( elemento => {
      if( elemento === "Enero") {
         nuevoArray.push("Enero");
      } else if ( elemento === "Marzo") {
         nuevoArray.push("Marzo");
      } else if ( elemento === "Noviembre") {
         nuevoArray.push("Noviembre");
      }
   })
   return (nuevoArray.length === 3) ? nuevoArray : "No se encontraron los meses pedidos";
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let tablaDelSeisArray = [];
   let tablaDelSeis = 6;
   for(let i = 0; i <= 10; i++){
      tablaDelSeisArray.push(tablaDelSeis * i);
   }
   return tablaDelSeisArray;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let newArrray = [];
   array.forEach( elemento => {
      if(elemento > 100) newArrray.push(elemento);
   })
   return newArrray;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var nuevoArreglo = [];
   var nuevoValor = num;
   for(var i=1; i <=10; i++) {
      nuevoValor = nuevoValor + 2;
      if(nuevoValor === i) {
         return "Se interrumpió la ejecución";
         break;
      }
      nuevoArreglo.push(nuevoValor);
   }
      
   return nuevoArreglo;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var nuevoArreglo = [];
   var nuevoValor = num;
   for(var i=1; i <=10; i++) {
      if(i === 5) {
         continue;
      } else {
         nuevoValor = nuevoValor + 2;
         nuevoArreglo.push(nuevoValor);
      }
   }
      
   return nuevoArreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
