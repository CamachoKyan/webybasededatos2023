<?php

    $server = "localhost";
    $user = "root";
    $password = "";

    $conexion = new mysql($server,$user,$password);

    if($conexion->connect_error){
        die("Fallo la conexión" . $conexion-> connect_error);
    }
?>