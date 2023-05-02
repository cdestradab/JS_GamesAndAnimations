document.write('<canvas width="600" height="400"></canvas>');

var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

function dibujarCirculo(x, y, radio, color) {

  pincel.fillStyle = color;
  pincel.beginPath();
  pincel.arc(x, y, radio, 0, 2*3.14);
  pincel.fill();
  
}

dibujarCirculo(300,200,10,"red");
dibujarCirculo(300,180,10,"yellow");
dibujarCirculo(320,200,10,"black");
dibujarCirculo(300,220,10,"blue");
dibujarCirculo(280,200,10,"orange");