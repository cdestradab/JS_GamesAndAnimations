document.write('<canvas width="600" height="400"></canvas>');

var pantalla = document.querySelector('canvas');
var pincel = pantalla.getContext('2d');

pincel.fillStyle = "grey"; // propiedad
pincel.fillRect(0,0,600,400); // funcion

function exibirAlerta(evento){
  let x = evento.pageX - pantalla.offsetLeft;
  let y = evento.pageY - pantalla.offsetTop;
  console.log(evento);
  alert(x + " , " + y);
}

function dibujarCirculo(evento){
  let x = evento.pageX - pantalla.offsetLeft;
  let y = evento.pageY - pantalla.offsetTop;

  //pincel.fillStyle = 'blue';
  pincel.beginPath();
  pincel.arc(x,y,10,0,2*3.14);
  pincel.fill();

  console.log(x + " , " + y);
}

//pantalla.onclick = exibirAlerta;
pantalla.onclick = dibujarCirculo;

var listaColores = ['blue', 'red', 'green'];
var seleccionColor = -1;

function alterarColor() {
  seleccionColor++;
  if(seleccionColor > 2){
    seleccionColor = 0;
  }

  pincel.fillStyle = listaColores[seleccionColor];
  return false;
  }

pantalla.oncontextmenu = alterarColor;