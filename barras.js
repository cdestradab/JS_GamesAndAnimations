function dibujarRectangulo(x, y, base, altura, color) {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");

    pincel.fillStyle=color;
    pincel.fillRect(x,y, base, altura);
    pincel.strokeStyle="black";
    pincel.strokeRect(x,y, base, altura);
}

function escribirTexto(x , y, texto) {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");

    pincel.font="15px Georgia";
    pincel.fillStyle="black";
    pincel.fillText(texto, x, y);
}

function dibujarBarra(x, y, serie, colores, texto) {

    //Aquí necesitamos escribir el texto y dibujar los rectángulos

}

var serie2009 = [6, 47, 41, 3, 3];
var serie2019 = [81, 9, 3, 3, 4];

var colores = ["blue","green","yellow", "red","gray"];

