
    
var btn = document.getElementById('btn_cargar_usuarios');
var loader = document.getElementById('loader');

btn.addEventListener('click',function(){
    var peticion = new XMLHttpRequest();
    peticion.open('GET','php/leer-datos.php');

    loader.classList.add('active');

    peticion.onload = function(){

        //Debemos de parsear los datos que nos estan llegando en formato JSON
        var datos = JSON.parse(peticion.responseText);
        console.log(datos);

        //De la siguiente forma podemos recorrer los datos de forma controlada
        for(var i = 0; i < 5; i++){
            var elemento = document.createElement('tr');
            elemento.innerHTML += ("<td>" + datos[i].id + "</td>");
            elemento.innerHTML += ("<td>" + datos[i].name + "</td>");
            elemento.innerHTML += ("<td>" + datos[i].edad + "</td>");
            elemento.innerHTML += ("<td>" + datos[i].pais + "</td>");
            elemento.innerHTML += ("<td>" + datos[i].email + "</td>");
            document.getElementById('tabla').appendChild(elemento);
        }
    }
    
    peticion.onreadystatechange = function(){
        if(peticion.readyState == 4 && peticion.status == 200) {
            loader.classList.remove('active');
        }
    }

    peticion.send();
});
