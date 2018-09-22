// Requires
let express = require('express');

//Iniciar letiables
let app = express();
let port = 3000;

//Escuchar peticiones
app.listen(port, () => {
    console.log(`Express server puerto ${port} ${verde()}`, `online`);
})

//Funciones
function verde() {
    return '\x1b[32m%s\x1b[0m';
}

//Rutas
app.get('/calculadora/suma/:num1/:num2', (req, res, next) => {
    let resultado = Number(req.params.num1) + Number(req.params.num2);
    res.status(200).json({
        ok: true,
        resultado: resultado,
        metodo: 'params'
    })
})
app.get('/calculadora/suma/', (req, res, next) => {
    let resultado = Number(req.query.num1) + Number(req.query.num2);
    res.status(200).json({
        ok: true,
        resultado: resultado,
        metodo: 'query'
    })
})
app.get('/calculadora/resta/:num1/:num2', (req, res, next) => {
    let resultado = Number(req.params.num1) - Number(req.params.num2);
    res.status(200).json({
        ok: true,
        resultado: resultado,
        metodo: 'params'
    })
})
app.get('/calculadora/resta/', (req, res, next) => {
    let resultado = Number(req.query.num1) - Number(req.query.num2);
    res.status(200).json({
        ok: true,
        resultado: resultado,
        metodo: 'query'
    })
})
app.get('/calculadora/multi/:num1/:num2', (req, res, next) => {
    let resultado = Number(req.params.num1) * Number(req.params.num2);
    res.status(200).json({
        ok: true,
        resultado: resultado,
        metodo: 'params'
    })
})
app.get('/calculadora/multi/', (req, res, next) => {
    let resultado = Number(req.query.num1) * Number(req.query.num2);
    res.status(200).json({
        ok: true,
        resultado: resultado,
        metodo: 'query'
    })
})
app.get('/calculadora/divi/:num1/:num2', (req, res, next) => {
    let resultado=0;
    if(Number(req.params.num2)!=0)
        resultado = Number(req.params.num1) / Number(req.params.num2);
    else
        resultado = "No se puede dividir entre 0.";
    res.status(200).json({
        ok: true,
        resultado: resultado,
        metodo: 'params'
    })
})
app.get('/calculadora/divi/', (req, res, next) => {
    let resultado=0;
    if(Number(req.query.num2)!=0)
        resultado = Number(req.query.num1) * Number(req.query.num2);
    else
        resultado = "No se puede dividir entre 0.";
    res.status(200).json({
        ok: true,
        resultado: resultado,
        metodo: 'query'
    })
})
app.get('/calculadora/descomponer/:num1', (req, res, next) => {
    let num=Number(req.params.num1);
    let nummax=num/2;
    let divis=2;
    let potencia=0;
    let resultado={};
    while (divis<nummax){
        if (num%divis==0){
            while (num%divis==0){
                num/=divis;
                potencia++;
            }
        }
        if(potencia>0)
            resultado[divis]=potencia;
        potencia=0;
        divis++;
    }
    
    res.status(200).json({
        ok: true,
        resultado: resultado,
        metodo: 'query'
    })
})
app.get('/calculadora/primos/:num1', (req, res, next) => {
    let nummax=Number(req.params.num1);
    let num =2;
    let fac=2;
    let primo=true;
    let resultado=[];
    while (num<=nummax){
            while ((fac<num)&&primo){
                if(num%fac==0)
                    primo=false;
                fac++;
            }
        
        if(primo)
            resultado.push(num);
        primo=true;
        fac=2;
        num++;
    }
    
    res.status(200).json({
        ok: true,
        resultado: resultado,
        metodo: 'query'
    })
})