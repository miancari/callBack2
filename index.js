/* 1. - Muestra un mensaje en consola mediante un callback.La función que escribas debe poder mostrar el mensaje como 
console.warn, console.log, console.info, o cualquier método para pintar en consola del objeto console.
 */
        //Resultado 


/* function mostrarMensajeCallback(mensaje, metodoConsola) {
    if (typeof metodoConsola !== 'function') {
      console.error('El segundo argumento debe ser un método de consola válido.');
      return;
    }
  
    metodoConsola(mensaje);
  }
  
  // Ejemplos de uso:
  mostrarMensajeCallback('Este es un mensaje de advertencia', console.warn);
  mostrarMensajeCallback('Este es un mensaje de log', console.log);
  mostrarMensajeCallback('Este es un mensaje de información', console.info);
   */

/*   2.- Crear una función que reciba como argumento una variable de cualquier tipo y un callback. 
  La función debe retornar como resultado, mediante el callback, cual es el tipo de dato de la variable ingresada e imprimir su contenido. typeof */

/* function analizarVariable (variable, fn) {
    const tipoDeDato = typeof variable;
    fn(tipoDeDato, variable);
}

function mostrarTipoYContenido (tipo, contenido) {
    console.log("Tipo de dato: ", tipo);
    console.log("Contenido: ", contenido);
}

const miVariable = "casa";

analizarVariable(miVariable, mostrarTipoYContenido); */

/* 3.- Crear una función que reciba como argumentos, 
dos números y un callback. Según el callback que 
se pase a la función, se devuelve la suma de los dos números, 
la resta de los dos números, 
la multiplicación de los dos números o división.
 */

/* function operacionesMatematicas (num1, num2, fn) {
    return fn(num1, num2);
}

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b != 0) {
        return a/b;
    }else {
        alert("Un número no puede ser dividido entre cero");
    }
}

const resultado = operacionesMatematicas(50, 2, multiplicacion);
console.log(`El resultado es: ${resultado}`); */

/* 4.- Escribe una función que reciba una cadena de caracteres 
y debe devolver, mediante un callback, la cadena de caracteres en 
mayúsculas o en minúsculas. 
ordenSuperior("PejeLagarto", minus); -> pejelagarto ordenSuperior("PejeLagarto", mayus); -> PEJELAGARTO */

/* function ordenSuperior(cadena, fn) {
    return fn(cadena);
}

function minus(cadena) {
    return cadena.toLowerCase();
}

function mayus(cadena) {
    return cadena. toUpperCase();
}

const cadena1 = "PejeLagarto";
const resultadoMinus = ordenSuperior(cadena1, minus);
console.log(resultadoMinus);

const resultadoMayus = ordenSuperior(cadena1, mayus);
console.log(resultadoMayus);
 */

/* 5.- Hacer un arreglo de 4 cantidades de tiempo (en minutos) EJEMPLO [120, 80, 200, 100] 
y tomar solo las cantidades mayores a dos horas (hacer la comparación en horas) regresar el nuevo array 
mediante un callback. */

function tiempoMinutos(array, fn) {
    const resultado = array.filter(minutos => minutos / 60 >= 2);
    return fn(resultado)
}

function impimirArreglo(array) {
    console.log(array);
}

const tiempoEnMinutos = [120,80,200,100];
tiempoMinutos(tiempoEnMinutos, impimirArreglo);
