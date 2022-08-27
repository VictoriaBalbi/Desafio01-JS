const opcion= prompt (`Elija una opcion: 
1) Factorial 
2)Ver si es un numero primo`);
// Pido al usuario el numero
const num= prompt ("Ingrese un numero: ");


switch (opcion) {
    case "1":
        // CALCULAR EL FACTORIAL DE UN NUMERO

        
        let factorial= num;

        for (let i=num-1; i >= 1 ; i--){
            factorial = factorial*i;
        }

        alert(`El factorial de ${num} es ${factorial}`)
        
        break;

    case "2":
        //VER SI EL NUMERO ES PRIMO

        // lo defino como primo 
        let primo=true;
        // recorro un for desde 2 hasta un valor antes de num
        for (let i=2 ; i<num; i++)
        {   //si el resto entre num y el indice es 0 es porque es divisible por un numero que no es 1 ni si mismo → NO ES PRIMO
            if (num%i == 0)
            {
                primo=false;
                // si ya encuentro un numero que lo divida → ya se que no es primo → puedo cortar el for
                break;
            }
        }

        if(primo){
            alert(`El numero ${num} es primo`);
        }else{
            alert(`El numero ${num} no es primo`);
        }
        
        break;

    default:
        alert("No ingreso ninguna opcion")
        break;
}