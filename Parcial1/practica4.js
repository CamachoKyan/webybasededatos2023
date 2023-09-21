$(document).ready(function(){
    var dinero1 = 1500;
    var dinero2 = 1500;
    var dado = 0;
    var torre1 = 0;
    var torre2 = 0;
    var j1 = 1;
    var j2 = 1;
    var turnoJugador1 = true; // Variable para controlar el turno del jugador
    var comprando = false;
    var carcel1 = false;
    var carcel2 = false;

    va

    if (turnoJugador1) {
        j1 += dado;
        if (j1 > 36) {
            j1 -= 36;
            dinero1+=200;
        }

    $("#boton1").on("click", function(){
        dado = Math.floor(Math.random()*6+1);
        console.log("Dado:" + dado);
        $("#dado").attr("src", "imagenes/dado" + dado + ".PNG");
        $("#numero").html(dado);

        var Propietario = $("#" + id).attr("propietario");
        console.log(Propietario)
        if(Propietario==""){

        }else if(Propietario=){

        }
    });
    turnoJugador1 =!turnoJugador1;
    }
    
});