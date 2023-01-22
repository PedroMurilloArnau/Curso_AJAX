var btn_cargar = document.getElementById('btn_cargar_usuarios'),
    error_box = document.getElementById('error_box'),
    tabla = document.getElementById('tabla'),
    loader = document.getElementById('loader');

var usuario_nombre,
    usuario_edad,
    usuario_pais,
    usuario_correo;

function cargarUsuarios(){
    tabla.innerHTML = '<tr><th>ID</th><th>Nombre</th><th>Edad</th><th>Pais</th><th>Correo</th></tr>';

    var peticion = new XMLHttpRequest();
    peticion.open('GET','php/leer-datos.php');

    loader.classList.add('active');

    peticion.onload = function(){
        var datos = JSON.parse(peticion.responseText);

        console.log(datos);
        if(datos.error){
            error_box.classList.add('active');
        } else {
            datos.forEach(persona => {
                var elemento = document.createElement('tr');
                elemento.innerHTML += ("<td>" + persona.id + "</td>");
                elemento.innerHTML += ("<td>" + persona.name + "</td>");
                elemento.innerHTML += ("<td>" + persona.edad + "</td>");
                elemento.innerHTML += ("<td>" + persona.pais + "</td>");
                elemento.innerHTML += ("<td>" + persona.email + "</td>");
                document.getElementById('tabla').appendChild(elemento);
                
            /*for(var i = 0; i < 5; i++){
                var elemento = document.createElement('tr');
                elemento.innerHTML += ("<td>" + datos[i].id + "</td>");
                elemento.innerHTML += ("<td>" + datos[i].name + "</td>");
                elemento.innerHTML += ("<td>" + datos[i].edad + "</td>");
                elemento.innerHTML += ("<td>" + datos[i].pais + "</td>");
                elemento.innerHTML += ("<td>" + datos[i].email + "</td>");
                document.getElementById('tabla').appendChild(elemento);
            }*/

        })
    }
}

    peticion.onreadystatechange = function(){
        if(peticion.readyState == 4 && peticion.status == 200){
            loader.classList.remove('active');
        }
    }

    peticion.send();
}
function agregarUsuarios(e){

    //Mediante preventDefault evitamos que el formulario se envie
    e.preventDefault();

    var peticion = new XMLHttpRequest();
    peticion.open('POST','php/insertar-usuarios.php');

    usuario_nombre = formulario.name.value.trim();
    usuario_edad = parseInt(formulario.edad.value.trim());
    usuario_pais = formulario.pais.value.trim();
    usuario_correo = formulario.email.value.trim();

    if(formulario_valido()){
        //Insertamos el remove para quitar el mensaje en el que no tengamos errores
        error_box.classList.remove('active');

        //Preparamos nuestros parametros para enviarlos
        var parametros = 'name=' + usuario_nombre +'&edad=' + usuario_edad
        + '&pais=' + usuario_pais + '&email=' + usuario_correo;

        //Establecemos el header de nuestra peticion
        peticion.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

        loader.classList.add('active');

        peticion.onload = function(){
            cargarUsuarios();
            formulario.name.value = '';
            formulario.edad.value = '';
            formulario.pais.value = '';
            formulario.email.value = '';
        }
        
        peticion.onreadystatechange = function(){
            if(peticion.readyState == 4 && peticion.status == 200){
                loader.classList.remove('active');
            }
        }

        peticion.send(parametros);
    } else {
        error_box.classList.add('active');
        error_box.innerHTML = 'Por favor completa el formulario correctamente';
    }
}

btn_cargar.addEventListener('click',function(){
    cargarUsuarios();

})

formulario.addEventListener('submit', function(e){
    agregarUsuarios(e);
})

function formulario_valido(){
    if(usuario_nombre == ''){
        return false;
    }else if(isNaN(usuario_edad)){
        return false;
    }else if(usuario_pais == ''){
        return false;
    }else if(usuario_correo == ''){
        return false;
    }
    return true;
}