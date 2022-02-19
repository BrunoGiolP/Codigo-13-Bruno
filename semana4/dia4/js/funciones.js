/**
 * * Este va a funcionar solo para escribir mis funciones
 */

// funcion para poder sumar 2 numeros
const variableSecreta = "*********";

const sumar = (num1, num2) => +num1 + +num2;

const filtrarArray = (array, filtro) => {
  array.filter((elemento) => elemento === filtro);
};

const calcularAreaTriangulo = (base, altura) => {
  return (+base * altura) / 2;
};

const calcularSalario = (salario, horas) => {
  let resultado = "Por favor ingrese valores numericos";
  let limite = 40;

  if (isNaN(salario) || isNaN(horas)) {
    return resultado;
  }

  if (horas > limite) {
    resultado = `Solo se pagaran ${limite}  horas semanales. Su salario es : ${
      salario * limite
    }`;
  } else if (horas > 0 && horas <= limite) {
    resultado = `Su salario es : ${salario * horas}`;
  }
  return resultado;
};



//? includes es una funcion la cual permite ver si un elemento existe en un array
//* const numeros = [1, 2, 3, 4, 5]
//* Quiero saber si el 4 esta en numeros
//* numeros.includes(4)
//* si el 4 esta en numeros eso retorna true si no retorna false
//! el includes siempre retorna true || false
/*
const contarVocales = (frase) => {
  let fraseArray = frase.toUpperCase().split("");

  const vocales = ["A", "E", "I", "O", "U"];
  //* una funcion llamada includes
  let contador = 0;
  fraseArray.forEach((letra) => {
    if (vocales.includes(letra)) {
      contador++;
    }
  });

  return `La frase tiene ${contador} vocales`;
};
*/

const contarVocales = (frase) => {
  let contador = 0;
  frase.split("").forEach((letra) => {
    ["A", "E", "I", "O", "U"].includes(letra.toUpperCase()) && contador++;
  });

  return `La frase tiene ${contador} vocales`;
};


const contarConsonantes = (frase) => {
    let contador = 0;
    frase.split("").forEach((letra) => {
      ["B", "C", "D", "F", "G", "H","J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"].includes(letra.toUpperCase()) && contador++;
    });
  
    return `La frase tiene ${contador} consonantes`;
  };


  const contarLetras = parrafo => {
      let contador = 0;
      parrafo.split("").forEach((cadaletra) =>    {
      ["A", "B", "C", "D", "E", "F", "G", "H","I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"].includes(cadaletra.toUpperCase()) && contador ++;
  });
  return `Esta es una prueba si todo esta funcionando bien: ${contador}`
} ;




const hallarNumerosCapicua = () => {
    let contador = 1000;
  
    const numerosCapicua = [];
  
    while (contador <= 4000) {
      const numeros = contador.toString();
      // split convierte algo a un array
      const numerosSplit = numeros.split("");
  
      const parte1 = `${numerosSplit[0]}${numerosSplit[1]}`;
      const parte2 = `${numerosSplit[2]}${numerosSplit[3]}`;
  
      if (parte1 === parte2) {
        numerosCapicua.push(`${parte1}${parte2}`);
      }
      contador++;
    }
  
    console.log(numerosCapicua);
  };