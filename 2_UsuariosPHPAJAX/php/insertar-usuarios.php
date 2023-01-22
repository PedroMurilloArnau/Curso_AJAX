<?php

//Es necesario a posteriory limpiar los datos para recogerlos de forma adecuada
$name = $_POST['name'];
$edad = $_POST['edad'];
$pais = $_POST['pais'];
$email = $_POST['email'];

function validarDatos($name,$edad,$pais,$email){
    if($name == ''){
        return false;
    } elseif($pais == ''){
        return false;
    } elseif($email == ''){
        return false;
    }
    return "validar";
}

if(validarDatos($name,$edad,$pais,$email)){
    $conexion = new mysqli('127.0.0.1:3307','root','','curso_php_ajax');
    $conexion->set_charset("utf8");

    if($conexion->connect_errno){
        $respusta = ['error' => "conexion"];
    } else {
        $statement = $conexion->prepare("INSERT INTO usuarios(name,edad,pais,email)
        VALUES(?,?,?,?)");
        $statement->bind_param("siss",$name,$edad,$pais,$email);
        $statement->execute();
        $respusta = [];

        if($conexion->affected_rows <= 0){
            $respusta = ['error' => "lineas afectadas"];
        }
    }
} else {
    $respusta = ['error' => "no se validan"];
}

echo json_encode($respusta);
?>