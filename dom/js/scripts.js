
// alert au chargement de la page
window.onload = function (){

	alert("debut chargement page");

};

/*
window.onbeforeunload = closeIt;

//Fonction appelé au moment de fermer la page
function closeIt()
{
alert("Ferme");

}
*/

// changer la couleur du body 
function changeColor()

{
	document.body.style.backgroundColor="red"
}


// change image on hover
function changeimage(imag1)

{
	document.image1.src = imag1
}