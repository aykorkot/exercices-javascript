
var statusEnCours = "";

var opEnCours = "";


var btns = document.getElementsByClassName("nbrBtn");

// boucler sur les boutons
for(var i = 0; i < btns.length; i++) {
   
    var btn = btns[i];
    btn.onclick = function() {

    var x = this.value;

	document.getElementById("resultat").value = document.getElementById("resultat").value + x ;
		
    }
}
 

//addition 
document.getElementById("addition").onclick = function (){

	statusEnCours = "+";
	var x = document.getElementById("addition").value;
	document.getElementById("resultat").value = document.getElementById("resultat").value + " " + x + " ";	

}


//soustraction
document.getElementById("soustraction").onclick = function (){

	statusEnCours = "-";
	var x = document.getElementById("soustraction").value;
	document.getElementById("resultat").value = document.getElementById("resultat").value + " " + x + " ";
}

//multiplication
document.getElementById("multiplication").onclick = function (){

	statusEnCours = "x";
	var x = document.getElementById("multiplication").value;
	document.getElementById("resultat").value = document.getElementById("resultat").value + " " + x + " ";	
}



//division
document.getElementById("division").onclick = function (){

	statusEnCours = "/";
	var x = document.getElementById("division").value;
	document.getElementById("resultat").value = document.getElementById("resultat").value + " " + x + " ";
}


//fonction resultat final
document.getElementById("egal").onclick = function (){

	var valeur = document.getElementById("resultat").value;
	document.getElementById("resultat").value = eval(valeur);

}


// vider le champ
document.getElementById("cBtn").onclick = function (){
	document.getElementById("resultat").value = "";
}


//effacer dernier nombre
function effacer(){
	var resultat = document.getElementById("resultat").value;
	var taille = resultat.length;
	taille = resultat.substring(0,taille-1);
	document.getElementById("resultat").value = taille;
}



function virgule(){
	var x = document.getElementById("virgule").value;
	var resultat = document.getElementById("resultat").value;
	document.getElementById("resultat").value = resultat + x;
}