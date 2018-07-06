"use strict";
exports.__esModule = true;
var fs = require('fs');
var readline = require('readline');

var Spinner = require('cli-spinner').Spinner;//cli-spinner es un rotulador de npm para usar en terminal (indica cuando se esta convirtiendo)
var spinner = new Spinner({
    text: 'Convirtiendo .. %s',
    stream: process.stderr,
    onTick: function (msg) {
        this.clearLine(this.stream);
        this.stream.write(msg);
    }
});
spinner.start();
var filepath = "BANCO-NUEVO.txt";  //hace referencia al archivo txt existente
var filepathfinal = "BANCO NUEVO FORMATEADO.txt"; //hace referencia al nuevo archivo txt que se creara
var rl = readline.createInterface({
    input: fs.createReadStream(filepath)
});  //se crea una instancia para poder leer el archivo mediante un input