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
var newfile = new Array();
newfile.push("NUMERO CUENTA|FECHA MOVIMIENTO|HORA MOVIMIENTO|SUCURSAL|CLACON|DESCRIPCIÓN CLACON (CVE OPER)|SIGNO|IMPORTE|SALDO|REFERENCIA|CONCEPTO|DATOS ADICIONALES DE LA OPERACIÓN");
rl.on('line', function (line) { //una funcion listen con una cadena que contiene la unica linea de entrada que se recibe
    var currentline = line;
    newfile.push(SliceString(currentline, 0, 16) + "|" +
        SliceString(currentline, 16, 18) + "/" +
        SliceString(currentline, 18, 20) + "/" +
        SliceString(currentline, 20, 24) + "|" +
        SliceString(currentline, 24, 26) + ":" + SliceString(currentline, 26, 28) + "|" +
        SliceString(currentline, 28, 32) + "|" +
        SliceString(currentline, 32, 36) + "|" +
        SliceString(currentline, 36, 76) + "|" +
        SliceString(currentline, 76, 77) + "|" +
        SliceString(currentline, 77, 91) + "|" +
        SliceString(currentline, 91, 105) + "|" +
        SliceString(currentline, 105, 113) + "|" +
        SliceString(currentline, 113, 153) + "|" +
        SliceString(currentline, 153, currentline.length));
});