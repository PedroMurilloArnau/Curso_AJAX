
    
var btn = document.getElementById('btn_cargar_usuarios');
var loader = document.getElementById('loader');

btn.addEventListener('click',function(){
    var peticion = new XMLHttpRequest();
    peticion.open('GET','https://api.npoint.io/433c08f3e351ad8ba24e');

    loader.classList.add('active');

    peticion.onload = function(){

        //Debemos de parsear los datos que nos estan llegando en formato JSON
        var datos = JSON.parse(peticion.responseText);

        //Esta es una manera de traer y recorrer todos los datos
        /*datos.forEach(persona => {
            var elemento = document.createElement('tr');
            elemento.innerHTML += ("<td>" + persona.id + "</td>");
            elemento.innerHTML += ("<td>" + persona.name + "</td>");
            elemento.innerHTML += ("<td>" + persona.edad + "</td>");
            elemento.innerHTML += ("<td>" + persona.pais + "</td>");
            elemento.innerHTML += ("<td>" + persona.email + "</td>");
            document.getElementById('tabla').appendChild(elemento);
        });*/

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
