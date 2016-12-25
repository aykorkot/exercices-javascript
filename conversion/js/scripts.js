
// SOLUTION AVEC SWITCH
/*var tauxConv = 10.6290;
var status = 0;

    // fonction qui convertie la monnaie  
    document.getElementById("convertMoney").onclick = function () {
      console.log(status)
      var dirham = document.getElementById("dirham").value;

      if( (isNaN(dirham) == true) || (dirham == "") ){
        alert("Veuillez saisir un nombre");
      }else{
        var euro = 0;
        if (status == 1) {
          euro = dirham * tauxConv;
        }else{
          euro = dirham / tauxConv;
        }
        document.getElementById("euro").value = euro;
      }

      // stopper le bouton submit
      return false; 
    }

    // inverser la conversion
    document.getElementById("switch").onclick = function () {

     document.getElementById("euro").value = "";
      if(status == 1){
        document.getElementsByTagName("small")[0].innerHTML ="Dhs";
        document.getElementsByTagName("small")[1].innerHTML ="Euro";
         status = 0;
      }else{
        document.getElementsByTagName("small")[0].innerHTML ="Euro";
        document.getElementsByTagName("small")[1].innerHTML ="Dhs";
        status=1;
      
      }

      
    return false;
  }


*/



// SOLUTION AVEC ARRAY
document.getElementById("de").onchange = function () {

  // Tableau des devises;
  var devise = new Array();
  devise["madToEur"] = 0,0942933;
  devise["eurToMad"] = 10.6290;

  devise["usdToMad"] = 10.1752172;
  devise["madToUsd"] = 0,09816;

  devise["eurToUsd"] = 1.04525;
  devise["usdToEur"] = 0.956708921;
  

  var montant = document.getElementById("montant").value;

  var select1 = document.getElementById("de");
  var selectDev1 = select1.options[select1.selectedIndex].value;

  var select2 = document.getElementById("en");
  var selectDev2 = select2.options[select2.selectedIndex].value;
  
  
  if( (selectDev1 == "mad") && (selectDev2 == "eur") ){
    montant = montant * devise[madToEur];
    
  }
  else if ( (selectDev1 == "mad") && (selectDev2 == "usd") ){
    montant = montant * devise["madToUsd"];

  }
  else if ( (selectDev1 == "eur") && (selectDev2 == "mad") ){
    montant = montant * devise["eurToMad"];

  }
  else if ( (selectDev1 == "eur") && (selectDev2 == "usd") ){
    montant = montant * devise["eurToUsd"];
    
  }
  else if ( (selectDev1 == "usd") && (selectDev2 == "mad") ){
    montant = montant * devise["usdToMad"];
 
  }
   else if ( (selectDev1 == "usd") && (selectDev2 == "eur") ){
    montant = montant * devise["usdToEur"];
  
  }
  
document.getElementById("resultat").innerHTML = montant;


  event.preventDefault();
}