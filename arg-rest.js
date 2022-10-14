"use strict";
(() => {
    //Se puede definir con diferentes tipos e insertar valores correspondientes
    //al mismo tipo.
    const numbers = [1, 2, 3, 4, 5, "6", 7, 8, 9, 10];
    const villians = ["Omega Rojo", "Dormammu", "Duende Verde"];
    numbers.push(11);
    console.log(numbers);
    villians.forEach((v) => console.log(v.toLocaleUpperCase()));
})();
