let sexo_masc = document.getElementById('masculino');
let sexo_fem = document.getElementById('femenino');
let botton = document.getElementById('btn');
let peso = document.getElementById('peso');
let altura = document.getElementById('altura');


sexo_masc.addEventListener("click", function(){
	console.log("hola masculino");
	$('#masculino').addClass(`cambio`);

	document.getElementById('resultado').innerHTML = "masculino";

})

sexo_fem.addEventListener("click", function(){
	console.log("hola femenino");
	$('#femenino').addClass(`cambiof`);

	document.getElementById('resultado').innerHTML = "femenino";

})


botton.addEventListener("click", function(){
	console.log("boton");
	let alt = altura.value;
	let pes = peso.value;
	let resultado = peso.value / ((alt*alt)/10000);
	console.log(Math.round(resultado)); 
	

	document.getElementById('imc').innerHTML = Math.round(resultado);


	if(alt == "" || pes == ""){
		document.getElementById('imc').innerHTML = "ERROR, debe informar peso y/o altura";
	}
	else if (alt < 130){
		document.getElementById('imc').innerHTML = "ERROR, la altura debe ser mayor que 130";
	}
	else if (pes < 30){
		document.getElementById('imc').innerHTML = "ERROR, el peso debe ser mayor que 30";
	}


})
