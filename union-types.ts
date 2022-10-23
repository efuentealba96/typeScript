(() => {
    type Hero = {
        name:string,
        age?: number,
        powers: string[],
        getName?: () => string,
    }

    let myCustomVariable:(string|number|Hero) = 'Fernando';
    console.log(typeof myCustomVariable)
    
    myCustomVariable = 20
    console.log(typeof myCustomVariable)

    myCustomVariable = {
        name:'Barry Allen',
        age:32,
        powers:['Super velocidad']
    }
    console.log(typeof myCustomVariable)
})()