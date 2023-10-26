<?php
    $server="localhost";
    $user="root";
    $password=""; 
    $baseDatos = "cetis107";
    //conexion
    $conexion = new mysqli($server, $user, $password, $baseDatos);

    //revisar conexion
    if($conexion->connect_error){
        die("Fallo la conexion" . $conexion->connect_error);
    }

    
?>