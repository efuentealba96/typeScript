(() => {
    const addNumber = (a:number, b:number) => a + b;
    const greet = (name:string) => `Hola ${name}` ;
    const saveTheWorld = () => `El mundo está salvado!`;
    
    //? Especificamos nombre y a continuacion se indica que lo que va a
    //? retornar es una funcion que devuelve un string y que como parametro
    //?  recibe un string tambien.
    let myFunction: (y:string) => string;

    myFunction = greet;
    //* Esta funcion cumple con las condiciones especificadas
    console.log(myFunction('ELiacer'));

    //! Si descomentamos la siguinte definicion nos marca un error
    //! dado que no cumple con las condiciones que myFunction pide
    // myFunction = saveTheWorld;
    // console.log(myFunction();

})()