"use strict";
(() => {
    // utilzar "..." antes de definir la siguiente variable esta haciendo
    //referecia al uso del resto de las variables que se van a ingresar.
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
