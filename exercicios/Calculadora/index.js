let visor = document.querySelector('div.visor')
let valores = ''
let operadores = ''
function anexarNumero(valor) {
    valores += valor
    visor.textContent = valores
}

function anexarOperador(operador) {
    if(valores === "") return
    valores += operador
    visor.textContent = valores
}

function somar(){
    try {
        let resultado = eval(valores)
        if (!Number.isInteger(resultado)){
            resultado = resultado.toFixed(2)
        }
        valores = resultado
        visor.textContent = valores
    } catch (error) {
        visor.textContent = "error"
        valores = ""
    }

}

function reseta() {
    window.location.reload()
}