// Requires
var express = require('express');

//Iniciar variables
var app = express();
var port = 3000;

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
    var resultado = Number(req.params.num1) + Number(req.params.num2);
    res.status(200).json({
        ok: true,
        resultado: resultado,
        metodo: 'params'
    })
})
app.get('/calculadora/suma/', (req, res, next) => {
    var resultado = Number(req.query.num1) + Number(req.query.num2);
    res.status(200).json({
        ok: true,
        resultado: resultado,
        metodo: 'query'
    })
})
app.get('/calculadora/resta/:num1/:num2', (req, res, next) => {
    var resultado = Number(req.params.num1) - Number(req.params.num2);
    res.status(200).json({
        ok: true,
        resultado: resultado,
        metodo: 'params'
    })
})
app.get('/calculadora/resta/', (req, res, next) => {
    var resultado = Number(req.query.num1) - Number(req.query.num2);
    res.status(200).json({
        ok: true,
        resultado: resultado,
        metodo: 'query'
    })
})
app.get('/calculadora/multi/:num1/:num2', (req, res, next) => {
    var resultado = Number(req.params.num1) * Number(req.params.num2);
    res.status(200).json({
        ok: true,
        resultado: resultado,
        metodo: 'params'
    })
})
app.get('/calculadora/multi/', (req, res, next) => {
    var resultado = Number(req.query.num1) * Number(req.query.num2);
    res.status(200).json({
        ok: true,
        resultado: resultado,
        metodo: 'query'
    })
})
app.get('/calculadora/divi/:num1/:num2', (req, res, next) => {
    if(Number(req.params.num2)!=0)
        var resultado = Number(req.params.num1) / Number(req.params.num2);
    else
        var resultado = "No se puede dividir entre 0.";
    res.status(200).json({
        ok: true,
        resultado: resultado,
        metodo: 'params'
    })
})
app.get('/calculadora/divi/', (req, res, next) => {
    if(Number(req.query.num2)!=0)
        var resultado = Number(req.query.num1) * Number(req.query.num2);
    else
        var resultado = "No se puede dividir entre 0.";
    res.status(200).json({
        ok: true,
        resultado: resultado,
        metodo: 'query'
    })
})