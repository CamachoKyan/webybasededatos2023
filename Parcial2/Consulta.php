<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">

    <script
  src="https://code.jquery.com/mobile/1.5.0-rc1/jquery.mobile-1.5.0-rc1.js"
  integrity="sha256-ozaZ7ZptnEEuLpoEojfxBjOKXHoaQUb/DLnsTUEkIfs="
  crossorigin="anonymous"></script>

</head>
<body>
    <?php include 'menu.php';
          include 'practica1.php';
          
          $sql = "SELECT + FROM alumnos";
          $datos = $conexion->query($sql);
          
          ?>

          
</body>
</html>