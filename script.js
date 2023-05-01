function dibujarCuadrado(x,y,color){
  var pantalla = document.querySelector('canvas');
  var pincel = pantalla.getContext('2d');

  pincel.fillStyle = color; // propiedad
  pincel.fillRect(x,y,50,50); // funcion
  pincel.strokeStyle = "black"; // Color de borde
  pincel.strokeRect(x,y,50,50); // dimension de borde
}

x=0

while(x<600){
  dibujarCuadrado(x,0,"yellow");
  dibujarCuadrado(x,50,"blue");
  dibujarCuadrado(x,100,"red");
  x = x + 50;
  
}
