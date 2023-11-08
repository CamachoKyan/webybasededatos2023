<?php

    include 'conexion.php';

    $nombre = $_POST["nombre"];
    $semestre = $_POST["semestre"];
    $especialidad = $_POST["especialidad"];

    $sql = "INSERT INTO materias(nombre, semestre, especialidad) VALUES ('".$nombre."',".$semestre.",'".$especialidad."')";

    if($conexion->query($sql) === TRUE){
        header("Location: ConsultarMateria.php");
        $conexion->close();
        exit;
    } else {
        echo "<h2>Ocurrió un error</h2> <p>Error: " .$sql . "<br>" . $conexion->error . "</p>";
        echo "<h3><a href='ConsultarMateria.php'>Regresar a las Materias</a></h3>";
    }

?>