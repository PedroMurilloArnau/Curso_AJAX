<?php

header('Content-type: application/json; charset=utf-8');

//Debemos de crear un array asociativo para poder crear el JSON
$respuesta = [
    [
        'id' => 'dsadsa54564fsd',
        'name' => 'Pedro',
        'edad' => 35,
        'pais' => 'España',
        'email' => 'pedro.catar@gmail.com'
    ],
    [
        'id' => 'dsadsa54dsf564fsd',
        'name' => 'Manuel',
        'edad' => 40,
        'pais' => 'Francia',
        'email' => 'manuel.catar@gmail.com'
    ]
];

    //Para pasar un archivo a JSON tenemos que envolverlo de la siguiente manera
    echo json_encode($respuesta);


var_dump($respuesta);

// echo '[{"name": "Carlos"},{"name": "Alejandro"}]';

?>