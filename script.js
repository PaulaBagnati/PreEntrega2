alert ("Bienvenidos a DINERO FACIL. ¡Cotiza tu préstamo YA!");
alert ("Vamos a solicitar unos datos para continuar");

//capturando datos de la persona
let nombre = prompt("Ingresa tu nombre").toLocaleLowerCase();
let age = 0;
let email = ``;

if (nombre == `` ){
    console.log("Ingresa tu nombre por favor");
}else{
    age = prompt("Ingresa tu edad").toLocaleLowerCase();
    if(age == ``){
        console.log ("esta vacio")
        prompt = Number (("Ingrese su edad, por favor"));
    }
}


//creando objeto persona
const persona = {
    nombre : nombre,
    edad : age,
    email :email,
}

if (persona.edad <= 17){
    alert("Usted es menos de edad");
}else{
    email = prompt("Ingresa tu email").toLocaleLowerCase();
}








// const banco = prompt(`Selecciona tu banco: 
// 1. Galicia
// 2. Santander
// 3. BVBA
// 4. Provincia
// 5. Nación
// 6. Superville
// 7. HSBC
// 8. ICBC
// 9. otros`).toLocaleLowerCase();  

// const cuotas =Number( prompt(`seleciona cuotas :
// 3 - 6 - 12 -24`));

// let dinero = Number(prompt("¿Cuanto dinero deseas solicitar?"));


// const PrestamoSolicitado = {
//     banco : banco,
//     edad : edad,
//     email :email,
// }




// function solicitarPrestamo (){
//     let banco = prompt(`Selecciona tu banco: 
//     1. Galicia
//     2. Santander
//     3. BVBA
//     4. Provincia
//     5. Nación
//     6. Superville
//     7. HSBC
//     8. ICBC
//     9. otros`).toLocaleLowerCase();  
    
//     if (banco === Galicia || banco == Santander ||banco == BVBA ||banco == Provincia ||banco ==Nación ||banco == Superville ||banco == HSBC ||banco == ICBC ||banco == otros){
//         bancos.push(prestamoSolicitado);
//         console.log(prestamoSolicitado);

//     }else{
//         prompt("Selecciona una opcion de la lista");
//     }
    
// }

// solicitarPrestamo();





















