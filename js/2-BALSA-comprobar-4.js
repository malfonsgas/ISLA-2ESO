
/*window.onload= function Fescala() {
    var aleatorio = Math.random();
    document.getElementById('Escala').innerHTML = "Escala 1:"+ 1000*Math.round(4*aleatorio+1);
   EscalaPlano=1000*Math.round(4*aleatorio+1);
    }

*/

var contador=0;

function inicia(){
		var seleccion=document.getElementById("respuesta3");
		seleccion.selectedIndex=-1;	
		var seleccion5=document.getElementById("respuesta5");
		seleccion5.selectedIndex=-1;			
		var seleccion6=document.getElementById("respuesta6");
		seleccion6.selectedIndex=-1;	
		var seleccion8=document.getElementById("respuesta82");
		seleccion8.selectedIndex=-1;	

}


function PLANTILLAcomprobar(){
	var check11=document.getElementById("afirm11");
	var check12=document.getElementById("afirm12");
	var check13=document.getElementById("afirm13");
	var check14=document.getElementById("afirm14");
	var check15=document.getElementById("afirm15");

	var Respuesta1=(check11.checked && !check12.checked && !check13.checked && check14.checked && !check15.checked);
	

	var Respuesta21=document.getElementById("respuesta21").value;
	var Respuesta22=document.getElementById("respuesta22").value;

	var Respuesta3=document.getElementById("respuesta3").value;

	var Respuesta41=document.getElementById("respuesta41").value;
	var Respuesta42=document.getElementById("respuesta42").value;

	var Respuesta5=document.getElementById("respuesta5").value;
	var Respuesta6=document.getElementById("respuesta6").value;
	var Respuesta7=document.getElementById("respuesta7").value;

	var Respuesta81=document.getElementById("respuesta81").value;
	var Respuesta82=document.getElementById("respuesta82").value;

	var exito="true";

	/*Elegir la expresión lógica correcta*/


	if (Respuesta1){
	 	document.getElementById("Correcto1").style='display:block';
	 	document.getElementById("Incorrecto1").style='display:none';
	} else{
		document.getElementById("Correcto1").style='display:none';
		document.getElementById("Incorrecto1").style='display:block';
	}

	if (Respuesta21=="700"){
	 	document.getElementById("Correcto21").style='display:block';
	 	document.getElementById("Incorrecto21").style='display:none';
	} else{
		document.getElementById("Incorrecto21").style='display:block';
		document.getElementById("Correcto21").style='display:none';
		exito="false";
	}

	if (Respuesta22=="1400"){
	 	document.getElementById("Correcto22").style='display:block';
	 	document.getElementById("Incorrecto22").style='display:none';
	} else{
		document.getElementById("Incorrecto22").style='display:block';
		document.getElementById("Correcto22").style='display:none';
		exito="false";
	}

	if (Respuesta3=="PD"){
	 	document.getElementById("Correcto3").style='display:block';
	 	document.getElementById("Incorrecto3").style='display:none';
	} else{
		document.getElementById("Incorrecto3").style='display:block';
		document.getElementById("Correcto3").style='display:none';
		exito="false";
	}


	if (Respuesta41=="350"){
	 	document.getElementById("Correcto41").style='display:block';
	 	document.getElementById("Incorrecto41").style='display:none';
	} else{
		document.getElementById("Incorrecto41").style='display:block';
		document.getElementById("Correcto41").style='display:none';
		exito="false";
	}

	if ((Respuesta42=="densidad") || (Respuesta42=="Densidad")){
	 	document.getElementById("Correcto42").style='display:block';
	 	document.getElementById("Incorrecto42").style='display:none';
	} else{
		document.getElementById("Incorrecto42").style='display:block';
		document.getElementById("Correcto42").style='display:none';
		exito="false";
	}


	if (Respuesta5=="SI"){
	 	document.getElementById("Correcto5").style='display:block';
	 	document.getElementById("Incorrecto5").style='display:none';
	} else{
		document.getElementById("Incorrecto5").style='display:block';
		document.getElementById("Correcto5").style='display:none';
		exito="false";
	}

	if (Respuesta6=="SI"){
	 	document.getElementById("Correcto6").style='display:block';
	 	document.getElementById("Incorrecto6").style='display:none';
	} else{
		document.getElementById("Incorrecto6").style='display:block';
		document.getElementById("Correcto6").style='display:none';
		exito="false";
	}

	if (Respuesta7=="560"){
	 	document.getElementById("Correcto7").style='display:block';
	 	document.getElementById("Incorrecto7").style='display:none';
	} else{
		document.getElementById("Incorrecto7").style='display:block';
		document.getElementById("Correcto7").style='display:none';
		exito="false";
	}
	
	if ((Respuesta81=="1000") && (Respuesta82=="SI")){
	 	document.getElementById("Correcto8").style='display:block';
	 	document.getElementById("Incorrecto8").style='display:none';
	} else{
		document.getElementById("Incorrecto8").style='display:block';
		document.getElementById("Correcto8").style='display:none';
		exito="false";
	}



		
	if (exito=="true"){
		/*document.getElementById("Contenido").style='display:none';*/
		document.getElementById("Codigo").innerHTML="CONSEGUIDO EN EL INTENTO " + contador+ ".<br> COORDENADAS: (5,5). <br> BUSCAR EL PUNTO RECTA CORTA EJE Y";
		document.getElementById("Codigo").style='display:block';
		
	}
	else{
		++contador;
		document.getElementById("Codigo").innerHTML="Vas en el intento número " + contador;
		document.getElementById("Codigo").style='display:block';
	}


}
