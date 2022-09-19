"use strict";
(() => {
    // tnemos que especificar el tipo de cada argumento con el fin de evitar
    // errores en los argumentos podemos especificar más de algun tipo de 
    // usando (string|boolean|number) o cualquier otro que estimemos necesario
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    // Para usar la funcion derechamente se puede imprimir
    // algo por consola o almacenar en una variable y luego
    // imprimirla o usarla para lo que se estima necesario
    const name = fullName('Tony', 'Stark');
    console.log({ name: name });
})();
