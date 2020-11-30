
/*window.onload= function Fescala() {
    var aleatorio = Math.random();
    document.getElementById('Escala').innerHTML = "Escala 1:"+ 1000*Math.round(4*aleatorio+1);
   EscalaPlano=1000*Math.round(4*aleatorio+1);
    }

*/

var contador=0;

function inicia(){
		var seleccion=document.getElementById("respuesta2");
		seleccion.selectedIndex=-1;	
		var seleccion2=document.getElementById("respuesta4");
		seleccion2.selectedIndex=-1;	
		var seleccion7=document.getElementById("respuesta7");
		seleccion7.selectedIndex=-1;	
}


function PLANTILLAcomprobar(){
	var Respuesta11=document.getElementById("respuesta11").value;
	var Respuesta12=document.getElementById("respuesta12").value;
	var Respuesta13=document.getElementById("respuesta13").value;
	var Respuesta14=document.getElementById("respuesta14").value;

	var Respuesta2=document.getElementById("respuesta2").value;

	var Respuesta3=document.getElementById("respuesta3").value;

    var Respuesta4=document.getElementById("respuesta4").value;

	var Respuesta5=document.getElementById("respuesta5").value;

	var Respuesta61=document.getElementById("respuesta61").value;
	var Respuesta62=document.getElementById("respuesta62").value;

	var Respuesta7=document.getElementById("respuesta7").value;

	var exito="true";

	/*Elegir la expresión lógica correcta*/




	if ((Respuesta11=="K") && (Respuesta12=="Na") && (Respuesta13=="Ca") && (Respuesta14=="Mg")){
	 	document.getElementById("Correcto1").style='display:block';
	 	document.getElementById("Incorrecto1").style='display:none';
	} else{
		document.getElementById("Correcto1").style='display:none';
		document.getElementById("Incorrecto1").style='display:block';
		exito="false";
	}


	if (Respuesta2=="homo"){
	 	document.getElementById("Correcto2").style='display:block';
	 	document.getElementById("Incorrecto2").style='display:none';
	} else{
		document.getElementById("Incorrecto2").style='display:block';
		document.getElementById("Correcto2").style='display:none';
		exito="false";
	}

	

	if (Respuesta3=="180"){
	 	document.getElementById("Correcto3").style='display:block';
	 	document.getElementById("Incorrecto3").style='display:none';
	} else{
		document.getElementById("Correcto3").style='display:none';
		document.getElementById("Incorrecto3").style='display:block';
		exito="false";
	}


if (Respuesta4=="PD"){
	 	document.getElementById("Correcto4").style='display:block';
	 	document.getElementById("Incorrecto4").style='display:none';
	} else{
		document.getElementById("Incorrecto4").style='display:block';
		document.getElementById("Correcto4").style='display:none';
		exito="false";
	}


	if ((Respuesta5=="6.66")||(Respuesta5=="6,66")){
	 	document.getElementById("Correcto5").style='display:block';
	 	document.getElementById("Incorrecto5").style='display:none';
	} else{
		document.getElementById("Incorrecto5").style='display:block';
		document.getElementById("Correcto5").style='display:none';
		exito="false";
	}

	if (((Respuesta61=="Evaporación")||(Respuesta61=="Evaporacion"))&&((Respuesta62=="Condensación")||(Respuesta62=="Condensacion"))){
	 	document.getElementById("Correcto6").style='display:block';
	 	document.getElementById("Incorrecto6").style='display:none';
	} else{
		document.getElementById("Correcto6").style='display:none';
		document.getElementById("Incorrecto6").style='display:block';
		exito="false";
	}



	if (Respuesta7=="SI"){
	 	document.getElementById("Correcto7").style='display:block';
	 	document.getElementById("Incorrecto7").style='display:none';
	} else{
		document.getElementById("Correcto7").style='display:none';
		document.getElementById("Incorrecto7").style='display:block';
		exito="false";
	}
	
		document.getElementById("Codigo").innerHTML=exito;
		document.getElementById("Codigo").style='display:block';
		

		
	if (exito=="true"){
		/*document.getElementById("Contenido").style='display:none';*/
		document.getElementById("Codigo").innerHTML="CONSEGUIDO EN EL INTENTO " + contador+ ".<br> COORDENADAS: (1,-1). <br> BUSCAR EL PUNTO MEDIO DEL RECTÁNGULO";
		document.getElementById("Codigo").style='display:block';
		
	}
	else{
		++contador;
		document.getElementById("Codigo").innerHTML="Vas en el intento número " + contador;
		document.getElementById("Codigo").style='display:block';
	}


}
