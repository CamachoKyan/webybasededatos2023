<?php

    $server = "localhost";
    $user = "root";
    $password = "12345678";

    $conexion = new mysql($server,$user,$password);

    if($conexion->connect_error){
        die("Fallo la conexión" . $conexion-> connect_error)
    }
?>