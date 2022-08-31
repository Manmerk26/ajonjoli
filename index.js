function calcularPrecio(entrada,cantidad){
    var precio = 0
switch(entrada){
    case "babyshowers": 
    precio = 50 ;
    break;
    case "cumpleaños":
    precio = 4500 ; 
    break; 
    case "comuniones":
    precio = 200;
    break;
    case "props":
    precio = 750;
    break;  
    case "bautismos":
    precio = 5500 ; 
    break;   
    case "books":
    precio = 3200;
    break;
    case "gigantografias":
    precio = 7000;
    break;
    case "invitaciones digitales":
    precio = 1300;
    break;
    default:
        return Error
    break;
    
}
return precio * cantidad;
}
let entrada = prompt("Ingrese el producto");
let cantidad = prompt("ingrese la cantidad");
let precio = calcularPrecio(entrada,cantidad);
alert ("usted a comprado"+" "+entrada +" "+ "al precio de" + " " +precio);
contacto = prompt("Ingrese su contacto y nos comunicaremos a la brevedad");
alert ("Gracias por visitarnos");
//hacer array