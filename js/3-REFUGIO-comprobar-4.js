
/*window.onload= function Fescala() {
    var aleatorio = Math.random();
    document.getElementById('Escala').innerHTML = "Escala 1:"+ 1000*Math.round(4*aleatorio+1);
   EscalaPlano=1000*Math.round(4*aleatorio+1);
    }

*/

var contador=0;

function inicia(){
		var seleccion=document.getElementById("respuesta1");
		seleccion.selectedIndex=-1;	
		var seleccion3=document.getElementById("respuesta3");
		seleccion3.selectedIndex=-1;	
		var seleccion4=document.getElementById("respuesta4");
		seleccion4.selectedIndex=-1;	
		var seleccion5=document.getElementById("respuesta5");
		seleccion5.selectedIndex=-1;
	}


function PLANTILLAcomprobar(){
	var Respuesta1=document.getElementById("respuesta1").value;
	var Respuesta2=document.getElementById("respuesta2").value;
	var Respuesta3=document.getElementById("respuesta3").value;
	var Respuesta4=document.getElementById("respuesta4").value;
	var Respuesta5=document.getElementById("respuesta5").value;



	var exito="true";

	/*Elegir la expresión lógica correcta*/



	if (Respuesta1=="SI"){
	 	document.getElementById("Correcto1").style='display:block';
	 	document.getElementById("Incorrecto1").style='display:none';
	} else{
		document.getElementById("Correcto1").style='display:none';
		document.getElementById("Incorrecto1").style='display:block';
		exito="false";
	}
	


	if (Respuesta2=="448"){
	 	document.getElementById("Correcto2").style='display:block';
	 	document.getElementById("Incorrecto2").style='display:none';
	} else{
		document.getElementById("Correcto2").style='display:none';
		document.getElementById("Incorrecto2").style='display:block';
		exito="false";
	}

	if (Respuesta3=="SI"){
	 	document.getElementById("Correcto3").style='display:block';
	 	document.getElementById("Incorrecto3").style='display:none';
	} else{
		document.getElementById("Correcto3").style='display:none';
		document.getElementById("Incorrecto3").style='display:block';
		exito="false";
	}


		if (Respuesta4=="SI"){
	 	document.getElementById("Correcto4").style='display:block';
	 	document.getElementById("Incorrecto4").style='display:none';
	} else{
		document.getElementById("Correcto4").style='display:none';
		document.getElementById("Incorrecto4").style='display:block';
		exito="false";
	}

		if (Respuesta5=="SI"){
	 	document.getElementById("Correcto5").style='display:block';
	 	document.getElementById("Incorrecto5").style='display:none';
	} else{
		document.getElementById("Correcto5").style='display:none';
		document.getElementById("Incorrecto5").style='display:block';
		exito="false";
	}

		

		
	if (exito=="true"){
		/*document.getElementById("Contenido").style='display:none';*/
		document.getElementById("Codigo").innerHTML="CONSEGUIDO EN EL INTENTO " + contador+ ".<br> COORDENADAS: (-1,-1). <br> BUSCAR EL PUNTO MEDIO DEL ROMBO";
		document.getElementById("Codigo").style='display:block';
		
	}
	else{
		++contador;
		document.getElementById("Codigo").innerHTML="Vas en el intento número " + contador;
		document.getElementById("Codigo").style='display:block';
	}


}
