<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consultar alumnos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body>
    <?php
        include 'menu.php';
        include 'conexion.php';

        $sql = "SELECT * FROM alumnos";
        $datos = $conexion->query($sql);
    ?>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <?php if ($datos->num_rows > 0) { ?>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Numero de control</th>
                            <th>Semestre</th>
                            <th>Edad</th>
                            <th>Turno</th>
                            <th>Sexo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php while ($fila = $datos->fetch_assoc()) { ?>
                            <tr>
                                <td><?php echo $fila['id']; ?></td>
                                <td><?php echo $fila['nombre']; ?></td>
                                <td><?php echo $fila['numero_control']; ?></td>
                                <td><?php echo $fila['semestre']; ?></td>
                                <td><?php echo $fila['edad']; ?></td>
                                <td><?php echo $fila['turno']; ?></td>
                                <td><?php echo $fila['sexo']; ?></td>
                            </tr>
                        <?php } ?>
                    </tbody>
                </table>
                <?php } else { ?>
                    <h2>No existen datos de alumnos en la base de datos</h2>
                <?php } ?>
            </div>
        </div>
    </div>

    <footer class="text-center">
        <span>Web App</span>
    </footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
</body>
</html>
