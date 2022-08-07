// Realizado por Rafael Fernandez 2022

var reqlista;
var reqtitle;
var connecttitle;

 window.onload = function(){
    // se usan distintas maneras aleatoriamente para hacer referencias a elementos html del dom
    //tales como getelementbyid, getelementsbyclass o queryselector
    var btn = document.getElementById("edit_profile");
    var addreq = document.getElementById("addrequest");
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var btnmodal = document.querySelector("#aceptar");
    var inputmodal = document.getElementById("pname");
    var nombre = document.querySelector(".ucbody h2");
    reqtitle = document.querySelector("#peticiones");
    reqlista = document.querySelector(".reqlist");
    connecttitle = document.querySelector("#conexiones");
    connectlista = document.querySelector(".connectlist");
    var operation = "";

    
     reqtitle.innerText = reqlista.getElementsByTagName("li").length;
     connecttitle.innerText = connectlista.getElementsByTagName("li").length;

   
     addreq.onclick = function() {
        if  (parseInt(reqtitle.innerText) <= 8) {
          inputmodal.value = "";
          operation = "ar";
          modal.style.display = "block";
      }
      else{alert("Se alcanzo el maximo de peticiones de conexion permitidas... por favor contacte con el administrador para adqirir un mejor plan")}
     }

     btn.onclick = function() {
         inputmodal.value = nombre.innerText;
         operation="ep";
         modal.style.display = "block";
     }

      span.onclick = function() {
           modal.style.display = "none";
      }  

      btnmodal.onclick = function() {
        if (operation == "ep"){
          if (inputmodal.value != ""){nombre.innerText= inputmodal.value};
        }
        if (operation == "ar"){
            if (inputmodal.value != ""){
                var cadenalista = "";
                var newli  = document.createElement("li");
                var cadena = "<div class=\"sec1\"><img class = \"iconusermini\" src=\"icons/user.jpg\" alt=\"image not found\"><p>" + inputmodal.value + "</p></div><div class=\"sec2\"><img class=\"im1\" onclick=\"addconnect(this)\" src=\"icons/checkcircle.png\" alt=\"imagen no encontrada\"> <img class=\"im2\" onclick=\"cancelreq(this)\" src=\"icons/xmark.png\" alt=\"imagen no encontrada\"></div>";
                newli.innerHTML = cadena;
                reqlista.appendChild(newli);
                reqtitle.innerText = reqlista.getElementsByTagName("li").length;
            };
        }
        modal.style.display = "none";
      }  

       window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
    
    }

    function addconnect(elemento){
        var elementoborrar = elemento.parentNode.parentNode;
        var nombremover = elementoborrar.querySelector(".sec1 p").innerText;
        var elementoagregar = "<div class=\"sec1\"><img class = \"iconusermini\" src=\"icons/user.jpg\" alt=\"imagen no encontrada\"><p>" + nombremover + "</p></div><div class=\"sec2\"><img class=\"im2\" onclick=\"cancelconnect(this)\" src=\"icons/xmark.png\" alt=\"imagen no encontrada\"></div>";
        if (confirm("Dese aceptar la peticion de conexion ?")){
          var newli  = document.createElement("li");
          newli.innerHTML = elementoagregar;
          connectlista.appendChild(newli);
          connecttitle.innerText = connectlista.getElementsByTagName("li").length;
          reqlista.removeChild(elementoborrar);
          reqtitle.innerText = reqlista.getElementsByTagName("li").length;
        }
    }


    function cancelreq(elemento){
       if (parseInt(reqtitle.innerText) > 0){
        var elementoborrar = elemento.parentNode.parentNode;
        if (confirm("Dese rechazar la peticion de conexion ?")){
          reqlista.removeChild(elementoborrar);
          reqtitle.innerText = reqlista.getElementsByTagName("li").length;
        }
      }
      else{
        alert("no record to delete");
      }
    }

    function cancelconnect(elemento){
      var elementoborrar = elemento.parentNode.parentNode;
      if (confirm("Dese cerrar conexion ?")){
        connectlista.removeChild(elementoborrar);
        connecttitle.innerText = connectlista.getElementsByTagName("li").length;
      }
    }

    function vermas(){
      alert("modulo aun en desarrollo");
    }
