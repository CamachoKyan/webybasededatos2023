$(document).ready(function(){
    $("#boton1").on("click",function(){
        alert("Evento Click");
    });

    $("#div1").on("dblclick",function(){
        alert("Evento Doble Click");
    });

    $("#input1").focus(function(){
        console.log("Método Focus Al Dar Click En El Input");
    });

    $("#texto1").hover(function(){
        $(this).css("background-color", "red");

    },function(){
        $(this).css("background-color", "white");
    }
    );

    $("#input2").keydown(function(){
        console.log("Key Down")
        $(this).css("background-color", "yellow");
    });
});