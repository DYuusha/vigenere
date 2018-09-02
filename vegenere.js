function cifrado(){
	var radios = document.getElementsByName('radios');
	var selects = document.getElementById('idioma');
	if(radios[0].checked){
		if(selects.options[selects.selectedIndex].text=="Ingles"){
			cifradoIng();
		}
		else if(selects.options[selects.selectedIndex].text=="Español"){
			cifradoEs();
		}
	}
	else if(radios[1].checked){
		if(selects.options[selects.selectedIndex].text=="Ingles"){
			descifradoIng();
		}
		else if(selects.options[selects.selectedIndex].text=="Español"){
			descifradoEs();
		}
	}
}

function cifradoIng(){
	var tamAlfabe =26;
	var texto=(document.getElementById('texto').value).toLowerCase();
	var tamTexto = texto.length;
	var clave =(document.getElementById('clave').value).toLowerCase();
	console.log(texto);
	console.log(clave);
	var tamClave = clave.length;
	var contClave=0;
	//guardo el abecedario en ingles
	
	var alfaIng = new Array();
	for(var i=0; i<tamAlfabe; i++){
		alfaIng[i]=String.fromCharCode(97+i);
	}

	// asignando el valor ascii a la clave
	var valorClave =new Array();
	for(var i=0;i<tamClave; i++){
		for (var j=0; j <tamAlfabe; j++) {
			if(clave[i]==alfaIng[j]) 
				valorClave[i]=j;
		}
	}
	//Asignando el valor ascii al texto
	var valorTexto =new Array();
	for (var i = 0; i < tamTexto; i++) {
		for (var j = 0; j < tamAlfabe; j++) {
			if(texto[i]==" "){
				valorTexto[i]=" ";
			}
			else if(texto[i]==alfaIng[j]){
					valorTexto[i]=j;
			}
			
		}

	}

	//cifrando
	var textoCifrado= new Array();
	for(var i=0;i<tamTexto;i++){
		//espacio
		if(texto[i]!=' '){
			textoCifrado[i]=alfaIng[(valorTexto[i]+valorClave[contClave])%tamAlfabe];
			contClave++;	
		}
		else{
			textoCifrado[i]=' ';
		}
		if(contClave==tamClave){
			contClave=0;
		}
	}
	div = document.getElementById("resultado1");
  var cadena = "";
  for(var i = 0; i < tamTexto; i++){
    cadena += textoCifrado[i];
  }
  div.textContent = 'Mensaje cifrado en ingles es: ' + cadena;

}
function cifradoEs(){
	var tamAlfabe =27;
	var texto=(document.getElementById('texto').value).toLowerCase();
	var tamTexto = texto.length;
	var clave =(document.getElementById('clave').value).toLowerCase();
	console.log(texto);
	console.log(clave);
	var tamClave = clave.length;
	var contClave=0;
	//guardo el abecedario en espa;ol 
	
	var alfaIng = new Array();
	var contEs =0;
	for(var i=0; i<tamAlfabe; i++){
		if(i==14){
			alfaIng[i]= String.fromCharCode(241); //letra ñ
		}
		else{
		alfaIng[i]=String.fromCharCode(97+contEs);
		contEs++;
		}
		console.log(alfaIng[i]);
	}

	// asignando el valor ascii a la clave
	var valorClave =new Array();
	for(var i=0;i<tamClave; i++){
		for (var j=0; j <tamAlfabe; j++) {
			if(clave[i]==alfaIng[j]) 
				valorClave[i]=j;
		}
	}
	//Asignando el valor ascii al texto
	var valorTexto =new Array();
	for (var i = 0; i < tamTexto; i++) {
		for (var j = 0; j < tamAlfabe; j++) {
			if(texto[i]==" "){
				valorTexto[i]=" ";
			}
			else if(texto[i]==alfaIng[j]){
					valorTexto[i]=j;
			}
			
		}

	}

	//cifrando
	var textoCifrado= new Array();
	for(var i=0;i<tamTexto;i++){
		//espacio
		if(texto[i]!=' '){
			textoCifrado[i]=alfaIng[(valorTexto[i]+valorClave[contClave])%tamAlfabe];
			contClave++;	
		}
		else{
			textoCifrado[i]=' ';
		}
		if(contClave==tamClave){
			contClave=0;
		}
	}
	div = document.getElementById("resultado1");
  var cadena = "";
  for(var i = 0; i < tamTexto; i++){
    cadena += textoCifrado[i];
  }
  div.textContent = 'El mensaje cifrado en Español: ' + cadena;

}
function descifradoEs(){
	var tamAlfabe =27;
	var texto=(document.getElementById('texto').value).toLowerCase();
	var tamTexto = texto.length;
	var clave =(document.getElementById('clave').value).toLowerCase();
	console.log(texto);
	console.log(clave);
	var tamClave = clave.length;
	var contClave=0;
	//guardo el abecedario en espa;ol 
	
	var alfaIng = new Array();
	var contEs =0;
	for(var i=0; i<tamAlfabe; i++){
		if(i==14){
			alfaIng[i]= String.fromCharCode(241);
		}
		else{
		alfaIng[i]=String.fromCharCode(97+contEs);
		contEs++;
		}
		console.log(alfaIng[i]);
	}

	// asignando el valor ascii a la clave
	var valorClave =new Array();
	for(var i=0;i<tamClave; i++){
		for (var j=0; j <tamAlfabe; j++) {
			if(clave[i]==alfaIng[j]) 
				valorClave[i]=j;
		}
	}
	//Asignando el valor ascii al texto
	var valorTexto =new Array();
	for (var i = 0; i < tamTexto; i++) {
		for (var j = 0; j < tamAlfabe; j++) {
			if(texto[i]==" "){
				valorTexto[i]=" ";
			}
			else if(texto[i]==alfaIng[j]){
					valorTexto[i]=j;
			}
			
		}

	}

	//descifrando
	var textoCifrado= new Array();
	for(var i=0;i<tamTexto;i++){
		//espacio
		if(texto[i]!=' ' && (valorTexto[i]-valorClave[contClave])>=0){
			textoCifrado[i]=alfaIng[(valorTexto[i]-valorClave[contClave])%tamAlfabe];
			contClave++;	
		}
		else if (texto[i]!=' ' && (valorTexto[i]-valorClave[contClave])<0) {
			textoCifrado[i]=alfaIng[(valorTexto[i]-valorClave[contClave]+tamAlfabe)%tamAlfabe];
			contClave++;
		}
		else{
			textoCifrado[i]=' ';
		}
		if(contClave==tamClave){
			contClave=0;
		}
	}
	div = document.getElementById("resultado1");
  var cadena = "";
  for(var i = 0; i < tamTexto; i++){
    cadena += textoCifrado[i];
  }
  div.textContent = 'El mensaje descifrado en Español: ' + cadena;

}
function descifradoIng(){
	var tamAlfabe =26;
	var texto=(document.getElementById('texto').value).toLowerCase();
	var tamTexto = texto.length;
	var clave =(document.getElementById('clave').value).toLowerCase();
	console.log(texto);
	console.log(clave);
	var tamClave = clave.length;
	var contClave=0;
	//guardo el abecedario en ingles 
	
	var alfaIng = new Array();
	for(var i=0; i<tamAlfabe; i++){
		alfaIng[i]=String.fromCharCode(97+i);
	}

	// asignando el valor ascii a la clave
	var valorClave =new Array();
	for(var i=0;i<tamClave; i++){
		for (var j=0; j <tamAlfabe; j++) {
			if(clave[i]==alfaIng[j]) 
				valorClave[i]=j;
		}
	}
	//Asignando el valor ascii al texto
	var valorTexto =new Array();
	for (var i = 0; i < tamTexto; i++) {
		for (var j = 0; j < tamAlfabe; j++) {
			if(texto[i]==" "){
				valorTexto[i]=" ";
			}
			else if(texto[i]==alfaIng[j]){
					valorTexto[i]=j;
			}
			
		}

	}

	//descifrando
	var textoCifrado= new Array();
	for(var i=0;i<tamTexto;i++){
		//espacio
		if(texto[i]!=' ' && (valorTexto[i]-valorClave[contClave])>=0){
			textoCifrado[i]=alfaIng[(valorTexto[i]-valorClave[contClave])%tamAlfabe];
			contClave++;	
		}
		else if (texto[i]!=' ' && (valorTexto[i]-valorClave[contClave])<0) {
			textoCifrado[i]=alfaIng[(valorTexto[i]-valorClave[contClave]+tamAlfabe)%tamAlfabe];
			contClave++;
		}
		else{
			textoCifrado[i]=' ';
		}
		if(contClave==tamClave){
			contClave=0;
		}
	}
	div = document.getElementById("resultado1");
  var cadena = "";
  for(var i = 0; i < tamTexto; i++){
    cadena += textoCifrado[i];
  }
  div.textContent = 'El mensaje descifrado en Ingles: ' + cadena;

}

