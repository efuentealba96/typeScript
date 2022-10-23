(() =>{
    //? type es una palabra reservada de typeScript, la tanspilacion de
    //? este codigo no equivale a nada en JavaScript, por ende es util para
    //? ser utilizado en la cración de formatos para objetos o clases.
    type Hero = {
        name:string,
        age?: number,
        powers: string[],
        getName?: () => string,
    }


    let flash:Hero = {
        name: "Barri Allen",
        age : 24,
        powers:['Super velocidad','Viajar en el tiempo']
    }
    
    let superman:Hero = {
        name: "Clark Kent",
        age : 60,
        powers:['Super velocidad','Volar'],
        getName() {
            return this.name;
        }
    } 
    
})()