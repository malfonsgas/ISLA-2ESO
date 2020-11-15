
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
}


function PLANTILLAcomprobar(){
	var Respuesta1=document.getElementById("respuesta1").value;

	var Respuesta2=document.getElementById("respuesta2").value;

	var check31=document.getElementById("afirm31");
	var check32=document.getElementById("afirm32");
	var check33=document.getElementById("afirm33");
	var check34=document.getElementById("afirm34");
	var check35=document.getElementById("afirm35");

	var check41=document.getElementById("afirm41");
	var check42=document.getElementById("afirm42");
	var check43=document.getElementById("afirm43");
	var check44=document.getElementById("afirm44");
	var check45=document.getElementById("afirm45");

	var Respuesta51=document.getElementById("respuesta51").value;
	var Respuesta52=document.getElementById("respuesta52").value;
	var Respuesta53=document.getElementById("respuesta53").value;
	var Respuesta54=document.getElementById("respuesta54").value;

	var Respuesta61=document.getElementById("respuesta61").value;
	var Respuesta62=document.getElementById("respuesta62").value;
	var Respuesta63=document.getElementById("respuesta63").value;
	var Respuesta64=document.getElementById("respuesta64").value;

	/*Elegir la expresión lógica correcta*/


	if (Respuesta1=="t=d/80"){
	 	document.getElementById("Correcto1").style='display:block';
	 	document.getElementById("Incorrecto1").style='display:none';
	} else{
		document.getElementById("Correcto1").style='display:none';
		document.getElementById("Incorrecto1").style='display:block';
	}


	if (Respuesta2==90){
	 	document.getElementById("Correcto2").style='display:block';
	 	document.getElementById("Incorrecto2").style='display:none';
	} else{
		document.getElementById("Incorrecto2").style='display:block';
		document.getElementById("Correcto2").style='display:none';
	}

	/*SI TIENE QUE ESTAR MARCADO PARA SER CORRECTO*/
	if (check31.checked){
	 	document.getElementById("Correcto31").style='display:block';
	 	document.getElementById("Incorrecto31").style='display:none';
	} else{
		document.getElementById("Incorrecto31").style='display:block';
		document.getElementById("Correcto31").style='display:none';
	}

	/*SI TIENE QUE ESTAR MARCADO PARA SER CORRECTO*/
	if (check32.checked){
	 	document.getElementById("Correcto32").style='display:block';
	 	document.getElementById("Incorrecto32").style='display:none';
	} else{
		document.getElementById("Incorrecto32").style='display:block';
		document.getElementById("Correcto32").style='display:none';
	}
	/*SI TIENE QUE ESTAR MARCADO PARA SER CORRECTO*/
	if (check33.checked){
	 	document.getElementById("Correcto33").style='display:block';
	 	document.getElementById("Incorrecto33").style='display:none';
	} else{
		document.getElementById("Incorrecto33").style='display:block';
		document.getElementById("Correcto33").style='display:none';
	}
	/*SI TIENE QUE ESTAR MARCADO PARA SER CORRECTO*/
	if (check34.checked){
	 	document.getElementById("Correcto34").style='display:block';
	 	document.getElementById("Incorrecto34").style='display:none';
	} else{
		document.getElementById("Incorrecto34").style='display:block';
		document.getElementById("Correcto34").style='display:none';
	}
	/*SI TIENE QUE ESTAR MARCADO PARA SER CORRECTO*/
	if (check35.checked){
	 	document.getElementById("Correcto35").style='display:block';
	 	document.getElementById("Incorrecto35").style='display:none';
	} else{
		document.getElementById("Incorrecto35").style='display:block';
		document.getElementById("Correcto35").style='display:none';
	}

	var Respuesta4=(check41.checked && !check42.checked && !check43.checked && check44.checked && check45.checked);
	if (Respuesta4){
	 	document.getElementById("Correcto4").style='display:block';
	 	document.getElementById("Incorrecto4").style='display:none';
	} else{
		document.getElementById("Correcto4").style='display:none';
		document.getElementById("Incorrecto4").style='display:block';
	}


	if (Respuesta51=="5555555"){
	 	document.getElementById("Correcto51").style='display:block';
	 	document.getElementById("Incorrecto51").style='display:none';
	} else{
		document.getElementById("Correcto51").style='display:none';
		document.getElementById("Incorrecto51").style='display:block';
	}

	if (Respuesta52=="5555555"){
	 	document.getElementById("Correcto52").style='display:block';
	 	document.getElementById("Incorrecto52").style='display:none';
	} else{
		document.getElementById("Correcto52").style='display:none';
		document.getElementById("Incorrecto52").style='display:block';
	}
	if (Respuesta53=="5555555"){
	 	document.getElementById("Correcto53").style='display:block';
	 	document.getElementById("Incorrecto53").style='display:none';
	} else{
		document.getElementById("Correcto53").style='display:none';
		document.getElementById("Incorrecto53").style='display:block';
	}
	if (Respuesta54=="5555555"){
	 	document.getElementById("Correcto54").style='display:block';
	 	document.getElementById("Incorrecto54").style='display:none';
	} else{
		document.getElementById("Correcto54").style='display:none';
		document.getElementById("Incorrecto54").style='display:block';
	}

if ((Respuesta61=="5555555") && (Respuesta62=="5555555")&&(Respuesta63=="5555555")&&(Respuesta64=="5555555")){
	 	document.getElementById("Correcto6").style='display:block';
	 	document.getElementById("Incorrecto6").style='display:none';
	} else{
		document.getElementById("Correcto6").style='display:none';
		document.getElementById("Incorrecto6").style='display:block';
	}

	/*if ((Respuesta2==90) && (Respuesta1=="t=d/80")&& (Respuesta3)){
		document.getElementById("Contenido").style='display:none';
		document.getElementById("Codigo").style='display:block';


	}*/
	++contador;
	document.getElementById("Codigo").innerHTML="Vas en el intento número " + contador;
	document.getElementById("Codigo").style='display:block';



}
