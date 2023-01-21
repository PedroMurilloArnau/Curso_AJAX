<?php
error_reporting(0);
header('Content-type: application/json; charset=utf-8');

$conexion = new mysqli('127.0.0.1:3307','root','','curso_php_ajax');

if($conexion->connect_errno){
    $respuesta = [
        'error' => 'true'
    ];
} else {
    $conexion->set_charset("utf8");
    $statment = $conexion->prepare("SELECT * FROM usuarios");
    $statment->execute();

    $resultados = $statment->get_result();

    $respuesta = [];

    while($fila = $resultados->fetch_assoc()){
        $usuario =[
            'id'    => $fila['ID'],
            'name'  => $fila['name'],
            'edad'  => $fila['edad'],
            'pais'  => $fila['pais'],
            'email' => $fila['email']
        ];
        array_push($respuesta,$usuario);
    };
}

echo json_encode($respuesta);
?>