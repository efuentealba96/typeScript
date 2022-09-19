(() => {
    // para crear un argumento opcional indicamos un "?" en el argumento en que 
    // se permita hacer opcional
    const fullName = (firstName:string,lastName?:string):string => {
        // Usando el operador || podemos ingresar un parametro por defecto
        // en caso de que no venga algun dato incluido para el parametro 
        // opcional de esta forma evitamos que aparezca un undefined
        
        return `${firstName} ${lastName || 'no especifica'}`;
    }
    
    const name = fullName('Tony','Stark');
    console.log({name:name});
    
}) ()