

document.getElementById("convertMoney").onclick = function () {

    var dirham = document.getElementById("dirham").value;
    var euro = document.getElementById("euro").value;
  
    if(isNaN(dirham) == true){
      alert("Veuillez saisir un nombre");
    }else{
      euro = dirham * 11;
      document.getElementById("euro").value = euro;
    }

  event.preventDefault();
}