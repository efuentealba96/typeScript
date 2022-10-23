"use strict";
(() => {
    let flash = {
        name: "Barri Allen",
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ['Super velocidad', 'Volar'],
        getName() {
            return this.name;
        }
    };
})();
