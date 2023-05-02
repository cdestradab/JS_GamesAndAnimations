document.write('<canvas width="600" height="400"></canvas>');

var pantalla = document.querySelector('canvas');
var pincel = pantalla.getContext('2d');

pincel.fillStyle = "grey"; // propiedad
pincel.fillRect(0,0,600,400); // funcion

function disenharCircunferencia(x,y,radio){
  pincel.fillStyle = "blue";
  pincel.beginPath();
  pincel.arc(x,y,radio,0,2*Math.PI);
  pincel.fill();
}

function limpiarPantalla(){
  pincel.clearRect(0,0,600,400);
}

var x = 0;
let goBack = false;

function actualizarPantalla(){
  limpiarPantalla();
  disenharCircunferencia(x,20,10);
  if(x==590){
    goBack = true;
  };
  if(x==10){
    goBack = false;
  }

  if(goBack){
    x--;
  } else {
    x++;
  }
}

setInterval(actualizarPantalla,1);