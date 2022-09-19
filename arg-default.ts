(() => {
    // El orden que se debe de seguir para organizar los parametro o argumentos consta
    // de dejar rimero aquellos parametros que son obligatorios y luego los opcionales
    const fullName = (firstName:string,lastName?:string,upper:boolean = false ):string => {
        // Usando el operador || podemos ingresar un parametro por defecto
        // en caso de que no venga algun dato incluido para el parametro 
        // opcional de esta forma evitamos que aparezca un undefined
        
        if (upper){
            return `${firstName} ${lastName || 'no especifica'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'no especifica'}`;
        }
    }
    
    const name = fullName('Tony','Stark');
    console.log({name:name});
    
}) ()