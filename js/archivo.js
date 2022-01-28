var x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
var x = $("#boton1");
  x.click(presionBoton1);
  x = $("#boton2");
  x.click(presionBoton2);
}

function presionBoton1() {
 var x = $("#formulario");
  x.html('<form>Ingrese nombre:<input type="text" id = "nombre"  placeholder="ingrese un nombre" >' +
    '<br>Ingrese clave:<input type="password" id="clave"  placeholder="ingrese una contraseña "><br>' +
    '<input type="submit" value="confirmar"></form>');
    alert("Llena el formulario para ver el contenido de las celdas")
}

$(document).ready(function(){ 
  $("#boton2").click(function(){
    $('body').css('background-image', 'url(https://media.istockphoto.com/photos/program-code-javascript-php-html-css-of-site-web-development-source-picture-id1202250586)');
 });
 
$(document).ready(function(){ 
  
   $().html('aún no has pulsado');
    $("#celda1").click(function(){
       texto1=$("#celda1").html();
       $("#capa1").html(texto1);
    });
    $("#celda2").click(function(){
       texto2=$("#celda2").html();
       $("#capa1").html(texto2);
    });
    $("#celda3").click(function(){
       texto3=$("#celda3").html();
       $("#capa1").html(texto3);
       setTimeout(function() {
        $("#capa1").fadeOut(1500);
    },3000);
    });
      
 });
 

$(document).ready(function() {
    setTimeout(function() {
        $(".content").fadeOut(1500);
    },3000);
 
    setTimeout(function() {
        $(".content2").fadeIn(1500);
    },6000);
});
});