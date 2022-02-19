const alumnos = [
    {
        nombre: "Pepe",
        edad: 21,
    },
    {
        nombre: "Juan",
        edad: 30,
    },
   {
       nombre: "Lucho",
       edad: 22,
   } ,
]

for (let obj = 0; obj < alumnos.length; obj++){
    if(alumnos[obj].edad < 30) {
    console.log(alumnos[obj]);
    }

}

console.log("-----------------")

for (let obj = 0; obj < alumnos.length; obj++){
    console.log("obj",obj)
    console.log(alumnos[obj]);
    

}

console.log("-----------------")

const contarVocales = (frase) => {
    // saber cuando mide la frase
    const fraseMayuscula = frase.toUpperCase();
    // para poder saber cuantos vocales tengo necesito un contador
    // este contador se va a encargar de guardar cuantas vocales tengo
    let contador = 0;
  
    for (let i = 0; i < fraseMayuscula.length; i++) {
      const letra = fraseMayuscula[i];
  
      if (
        letra === "A" ||
        letra === "E" ||
        letra === "I" ||
        letra === "O" ||
        letra === "U"
      ) {
        // contador = contador + 1;
        contador++;
      }
    }
  
    console.log(`La frase tiene ${contador} vocales`);
  };
  
  contarVocales("Hola me llamo Juan");
  contarVocales("aeiou");



  //Escribir un programa que escriba en pantalla los divisores comunes
// de dos números dados

//paso 1 debemos hallar los numero divisibles
// 10 => 1, 2, 5, 10

// const hallarDivisoresComunes = (numero1, numero2) => {
//   // // como puedo hallar los divires de un numero?
//   // // para poder hallar los divisiones de ese numero, necesito un for

//   // // supongamos que numero1 = 10
//   // for (let i = 1; i <= numero1; i++) {
//   //   // para saber si un numero es divisible por otro el residuo debe ser 0
//   //   // si quiero imprimir a los divisor debe imprimir a i porque en cada
//   //   // vuelta el valor de i cambia
//   //   //! ojo no imprimo numero1 porque numero1 siempre va a valer 10
//   //   if (numero1 % i === 0) {
//   //     console.log(i);
//   //   }
//   // }

//   // for (let j = 1; j <= numero2; j++) {
//   //   if (numero2 % j === 0) {
//   //     console.log(j);
//   //   }
//   // }
//   const divisores = [];

//   const divisores1 = hallarDivisores(numero1, divisores);
//   const divisores2 = hallarDivisores(numero2, divisores1);

//   // console.log("Divisore1", divisores1);
//   console.log("Divisores", divisores2);

//   return divisoresComunes;
// };

const hallarDivisoresComunes = (numero1, numero2) => {
  const arrayDivisores = [];
  const primerosDivisores = hallarDivisores(numero1, arrayDivisores);
  // entonces la variable primerosDivisores es un array
  const segundosDivosores = hallarDivisores(numero2, primerosDivisores);
  // sort sirve para ordenar un array
  const arrayOrdernado = segundosDivosores.sort();
  console.log(arrayOrdernado);

  for (let i = 0; i < arrayOrdernado.length; i++) {
    if (arrayOrdernado[i] === arrayOrdernado[i + 1]) {
      console.log(arrayOrdernado[i]);
    }
  }
};

// para que funcion sea operativa debe retornar un arreglo con los numeros que son
// divisores
const hallarDivisores = (numero, divisores) => {
  for (let j = 1; j <= numero; j++) {
    if (numero % j === 0) {
      // push sirve para agregar un elemento en la ultima posicion a un array
      divisores.push(j);
    }
  }

  return divisores;
};

hallarDivisoresComunes(12, 24);
