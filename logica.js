const botonNumero = document.querySelectorAll('[data-numero]')
const botonOperador = document.querySelectorAll('[data-operador]')
const botonIgual = document.querySelector('[data-igual]')
const botonBorrarTodo = document.querySelector('[data-borrar-todo]')
const botonBorrar= document.querySelector('[data-borrar]')
const textoValorSuperior = document.querySelector('.valor-superior')
const textoValorInferior = document.querySelector('.valor-inferior')


class Calculadora {
    constructor (textoValorInferior, textoValorSuperior){
        this.textoValorInferior = textoValorInferior
        this.textoValorSuperior = textoValorSuperior
        this.valorInferior = ''
        this.valorSuperior = ''
        this.operador= undefined
    }
    
    agregarNumero(num){
        this.valorInferior= this.valorInferior + num
    }
    
    imprimirDisplay(){
        this.textoValorInferior.textContent = this.valorInferior
        this.textoValorSuperior.textContent = this.valorSuperior
        
    }

    borrar(){
        this.valorInferior = this.valorInferior.slice(0,-1)
    }

    elegirOperacion(operador){
        if(this.valorInferior === "") return 
        if(this.valorSuperior !== "") {
         this.realizarCalculo()
        }
        this.operador = operador
        this.valorSuperior = this.valorInferior
        this.valorInferior = ''
    }

    realizarCalculo (){
        let resultado 
        let conversorValorSuperior = parseFloat(this.valorSuperior)
        let conversorValorInferior = parseFloat(this.valorInferior)

        switch(this.operador){
            case '+' : resultado = conversorValorSuperior + conversorValorInferior
            break
            case '-' : resultado = conversorValorSuperior - conversorValorInferior
            break
            case 'x' : resultado = conversorValorSuperior * conversorValorInferior
            break
            case '÷' : resultado = conversorValorSuperior / conversorValorInferior
            break
            default : return
        }
        
        this.valorInferior = resultado
        this.operador = undefined
        this.valorSuperior = ''
        
    }

    limpiarPantalla(){
        this.valorInferior =''
        this.valorSuperior =''
        this.operador = undefined
    }
}



const calculadora = new Calculadora (textoValorInferior, textoValorSuperior)

botonNumero.forEach(boton => {
    boton.addEventListener('click',() => {
        calculadora.agregarNumero(boton.textContent)
        calculadora.imprimirDisplay()

    })
})

botonBorrar.addEventListener('click', () => {
    calculadora.borrar()
    calculadora.imprimirDisplay()
})

botonOperador.forEach(boton => {
    boton.addEventListener('click',() => {
        calculadora.elegirOperacion(boton.textContent)
        calculadora.imprimirDisplay()

    })
})

botonIgual.addEventListener('click', () => {
    calculadora.realizarCalculo()
    calculadora.imprimirDisplay()
})

botonBorrarTodo.addEventListener('click', () => {
    calculadora.limpiarPantalla()
    calculadora.imprimirDisplay()
})