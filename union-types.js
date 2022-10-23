"use strict";
(() => {
    let myCustomVariable = 'Fernando';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Barry Allen',
        age: 32,
        powers: ['Super velocidad']
    };
    console.log(typeof myCustomVariable);
})();
