alert ("Bienvenidos a DINERO FACIL. ¡Cotiza tu préstamo YA!");
alert ("Vamos a solicitar unos datos para continuar");

//capturando datos de la persona
let nombre = prompt("Ingresa tu nombre").toLocaleLowerCase();

let regex = /[0-9]+/; //Esta expresion define que puede haber uno o mas números.

// validacion de campo vacío
while(nombre == ''){
    alert ("El nombre no puede estar vacio");
    nombre = prompt("Ingresa tu nombre").toLocaleLowerCase();
}


// Validacion de string
while(regex.test(nombre)){
    alert(` ${nombre} No es un nombre valido!`);
    nombre = prompt("Ingresa tu nombre").toLocaleLowerCase();
}

// validacion de edad permitida
function validarEdad(edad){

    if (edad <= 17 || edad > 65){        
        return false;
    }else{
        return true;
    }

}

let age = 0;

age = Number (prompt("Ingresa tu edad"));

// bucle que permite validar "campo vacio"
while(age == '' || age == 0){
    alert ("El campo edad no puede estar vacio");
    age = Number (prompt ("Ingresa tu edad, por favor !!"));
}

// bucle que permite validar "que se ingrese un número" 
while(isNaN(age)){
        alert(` ${age} No es un valor valido!`);
        age = Number (prompt("Ingresa tu edad, por favor !!"));
}

// bucle que permite validar "mayoría de edad" 
while(!validarEdad(age)){
    alert("Edad no permitida. Por favor ingrese un valor mayor a 17 años y menor a 65");
    age = Number (prompt("Por favor, ingresa una edad válida!!"));
}


// validación de email
let email = '';

email = prompt("Ingresa un email por favor !!").toLocaleLowerCase();

while(email == ''){
    email = prompt ("El email no debe estar vacio. Por favor ingresa un emal!!");
}


// valida que el email cumpla con la nomenclatura correcta
while(!email.includes("@")){
        alert(` ${email} No es un email valido!`);
        email = prompt ("Por favor ingresa un emal con formato válido!!");

}

//creando objeto persona
persona = {
    nombre : nombre,
    edad : age,
    email :email,
}


// arrays
const bancos = ["Galicia","Santander","BVBA","Provincia","BNA","otros"];
const cuotas = [3,6,12];

var credito = [];

let banco = prompt("Por favor, ingrese el número de banco que corresponda al suyo de acuerdo a la referencia:\n - Galicia \n - Santander \n - BBVA \n - Provincia \n - BNA \n - Otros bancos");


// Funcion de validacion 
function validarBanco(bancoSel){//bancoSel => Banco seleccionado

    if(bancoSel == ''){
        bancoSel = "El campo banco no puede estar vacío";            
    }else if(!bancos.includes(bancoSel)){
        bancoSel = `Por favor ingrese un valor válido para el campo Banco`;
    }else{
        bancoSel = "Banco correcto";
    }

    return(bancoSel);

}

// Funcion de validacion 
function validarCuotas(cuota){

    if(cuota == ''){
        cuota = "El campo cuota no puede estar vacío";        
    }else if(!cuotas.includes(cuota)){
        cuota = `Por favor ingrese un valor válido (3, 6 o 12)`;
    }else{
        cuota = "Cuotas correctas";
    }

    return(cuota);

}


while(validarBanco(banco) != "Banco correcto"){
    alert(validarBanco(banco));
    banco = prompt("Por favor, ingrese el número de banco que corresponda al suyo de acuerdo a la referencia:\n - Galicia \n - Santander \n - BBVA \n - Provincia \n - BNA \n - Otros bancos");
}

let cantidadDinero = Number (prompt("Por favor ingrese el monto que desea solicitar (hasta $10000)"));

while(cantidadDinero == '' || cantidadDinero == 0){
    alert ("El campo dinero solicitado no puede estar vacio");
    cantidadDinero = Number (prompt("Por favor ingrese el monto que desea solicitar (hasta $10000)"));
}

while(isNaN(cantidadDinero)){
        alert(`La cantidad solicitada no presenta un formato válido!`);
        cantidadDinero = Number (prompt("Por favor ingrese el monto que desea solicitar (hasta $10000)"));
}

while(cantidadDinero > 10000){
    alert("Cantidad solicitada superior al máximo permitido");
    cantidadDinero = Number (prompt("Por favor ingrese el monto que desea solicitar (hasta $10000)"));
}

let cuota = Number (prompt("Por favor, ingrese la cantidad de cuotas a devolver el crédito:\n 3 \n 6 \n 12"));

while(validarCuotas(cuota) != "Cuotas correctas"){
    alert(validarCuotas(cuota));
    cuota = Number (prompt("Por favor, ingrese la cantidad de cuotas a devolver el crédito:\n 3 \n 6 \n 12"));
}


// calcula la cuota a pagar
let valorCuota = cantidadDinero / cuota;


// añadir elementos ingresados por prompt al array.
credito.push(persona,banco, cantidadDinero, cuota, valorCuota);

console.log(`¡FELICITACIONES ${credito[0].nombre}! \n Ya tenés tu crédito aprobado por un total de ${credito[2]} a devolver en ${credito[3]} cuotas de ${credito[4]}`);
alert(`¡FELICITACIONES ${credito[0].nombre}! \n Ya tenés tu crédito aprobado por un total de ${credito[2]} a devolver en ${credito[3]} cuotas de ${credito[4].toFixed(2)}`);