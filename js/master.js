window .onload = () => {

    let tipo = prompt( 'Que Pizza desea ordenar \n\n 1. Personal.\n 2. Mediana.\n 3. Familiar.',  ),
        sabor = '',
        combinacion = '',
        tamanio = '';

    console.log( tipo );

    switch( tipo ) {
        case '1': 
            tamanio = 'personal';
            break;
        case '2': 
            tamanio = 'mediano';
            break;
        case '3': 
            tamanio = 'familiar';
            break;
    }

    switch( tamanio ) {
        case 'personal':
            sabor = prompt( 'Que Pizza desea ordenar \n\n 1. Pollo/Champiniones .\n 2. Hawaiana.\n 3. Carnes.',  );
            switch( sabor ) {
                case '1': 
                    combinacion = 'Pollo y Champiniones';
                    break;
                case '2': 
                    combinacion = 'Hawaiana';
                    break;
                case '3': 
                    combinacion = 'Carnes';
                    break;
            }
            break;
        case 'mediano':
            sabor = prompt( 'Que Pizza desea ordenar \n\n 1. Mexicana.\n 2. Criolla.',  );
            switch( sabor ) {
                case '1': 
                    combinacion = 'Mexicana';
                    break;
                case '2': 
                    combinacion = 'Criolla';
                    break;
            }
            break;   
        case 'familiar':     
            sabor = prompt( 'Que Pizza desea ordenar \n\n 1. Vegetariana. \n 2. Carne/Pollo.',  );
            switch( sabor ) {
                case '1': 
                    combinacion = 'Vegetariana';
                    break;
                case '2': 
                    combinacion = 'Carne y Pollo';
                    break;
            }
            break;
    }

    alert( 'Su pedido es una pizza de tamanio ' + tamanio + ' de ' + combinacion  );
    
}