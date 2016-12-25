

document.getElementById("convertMoney").onchange = function () {

	var devise = new Array();
	devise["eur"] = 10.6290;
	devise["mad"] = 1;
	devise["usd"] = 10.1752172;
	devise = Array()

    var dirham = document.getElementById("dirham").value;
    var euro = document.getElementById("euro").value;
  
    if(isNaN(dirham) == true){
      alert("Veuillez saisir un nombre");
    }else{
      euro = dirham * 10.6290;
      document.getElementById("euro").value = euro;
    }

  event.preventDefault();
}


/*
document.getElementById("inverse").onclick = function () {

    var dirham = document.getElementById("dirham").value;
    var euro = document.getElementById("euro").value;
  
   
      dirham = dirham * 0.9;
      document.getElementById("dirham").value = dirham;


  event.preventDefault();
}*/