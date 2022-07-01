
var pacientes = document.querySelectorAll(".paciente");

for(var i =0; i<pacientes.length;i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");


    var pesoValido = validarPeso(peso);
    var alturaValida = validarAltura(altura);

    //validamos los datos
    if(!pesoValido) {
        console.log("Peso incorrecto");
        tdIMC.textContent = "Peso incorrecto"
        pesoValido = false;
        paciente.classList.add("pacienteIncorrecto");
    }
    if(!alturaValida) {
        console.log("Peso incorrecto");
        tdIMC.textContent = "Altura incorrecto";
        alturaValida = false;
        paciente.classList.add("pacienteIncorrecto");
    }


    if (pesoValido && alturaValida) {
        var imc = peso / (altura * altura);
        tdIMC.textContent = imc.toFixed(2);
    }

}
function calcularImc(peso, altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validarPeso(peso){
    if (peso >= 0 && peso < 1000) {
        return true;
    }else{
        return false;
    }
}
function validarAltura(altura){
    if (altura >= 0 && altura < 3.00) {
        return true;
    }else{
        return false;
    }
}
