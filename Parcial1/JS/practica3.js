    // Define la función para mezclar la lista de archivos
    function mezclarListaArchivos() {
        // Define la lista de archivos .png
        var archivos = [
            'Mob1.png',
            'Mob2.png',
            'Mob3.png',
            'Mob4.png',
            'Mob5.png',
            'Mob6.png',
            'Mob7.png',
            'Mob8.png',
            'Mob1.png',
            'Mob2.png',
            'Mob3.png',
            'Mob4.png',
            'Mob5.png',
            'Mob6.png',
            'Mob7.png',
            'Mob8.png',
        ];

        // Crea una copia de la lista original para no modificarla directamente
        var listaMezclada = [...archivos];

        // Aplica el algoritmo de Fisher-Yates para mezclar aleatoriamente la lista
        for (let i = listaMezclada.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            [listaMezclada[i], listaMezclada[j]] = [listaMezclada[j], listaMezclada[i]];
        }

        return listaMezclada;
    }

   function crearElementosHTML(listaMezclada) {
var contenedor = document.getElementById('Pares'); // Reemplaza 'contenedor' con el ID de tu contenedor HTML

// Limpia cualquier contenido previo en el contenedor
contenedor.innerHTML = '';

// Especifica cuántas columnas debe haber en cada fila
var columnasPorFila = 4;

for (let i = 0; i < listaMezclada.length; i += columnasPorFila) {
    // Crea un nuevo div con clase "row" para cada fila
    var fila = document.createElement('div');
    fila.className = 'row';

    for (let j = i; j < i + columnasPorFila && j < listaMezclada.length; j++) {
        // Crea un nuevo div con clase "col-3" para cada columna
        var div = document.createElement('div');
        div.className = 'col-3';

        var img = document.createElement('img');
        img.src = 'Imagenes/Craft.png';
        img.className = 'img-fluid';
        img.setAttribute('data-id', listaMezclada[j]);
        img.setAttribute('data-estado', '0');

        div.appendChild(img);
        fila.appendChild(div);
    }

    // Agrega la fila al contenedor principal
    contenedor.appendChild(fila);
}
}

// Llama a la función para crear los elementos HTML con la lista mezclada
var listaMezclada = mezclarListaArchivos();
crearElementosHTML(listaMezclada);

$(document).ready(function(){
    var carta1 = ""; var carta2 = "";
    var par= false;
    var total_pares = 0; 
    var Fails = 0;

    $('img').click(function(e){
        var estado = $(this).attr('data-estado')
        var nombre_imagen = $(this).attr('data-id')

        if(estado == "0"){
            if(carta1 !=""  && carta2 != ""){
                console.log("Las cartas son diferentes");
                if(carta1.attr('data-id') != carta2.attr('data-id')){
                    console.log("Tapa Cartas Diferentes")
                    carta1.attr('src','Imagenes/Craft.png')
                    carta2.attr('src','Imagenes/Craft.png')
                    carta1.attr('data-estado','0')
                    carta2.attr('data-estado','0')

                    Fails++
                    if(Fails>=4){
                        alert("Has Perdido");
                        
                        $('img').each(function(){
                            $(this).attr('src','Imagenes/Craft.png')
                            $(this).attr('data-estado','0')
                        })
                        total_pares=0;
                        Fails = 0;
                        $("#total_pares").html(total_pares)
                        par=false
                        carta1=""
                        carta2=""
                        return;
                    } 
                }else{
                    console.log("Las cartas son iguales")
                    carta1.attr('data-estado','1')
                    carta2.attr('data-estado','1')
                    par=false
                }
                carta1=""
                carta2=""
            }
            console.log("estado de la carta:" + estado)
            if(carta1 == ""){
                carta1 = $(this);
                carta1.attr('src','Imagenes/' + nombre_imagen);
                carta1.attr('data-estado','1')
                console.log("seasigno carta #1")
            } else{
                    carta2 = $(this);
                    carta2.attr('src','Imagenes/' + nombre_imagen);
                    carta2.attr('data-estado','1')
                    console.log("seasigno carta #2")
        }
    }

    if(carta1 != "" && carta2 != ""){
        if(carta1.attr('data-id') == carta2.attr('data-id')){
            par = true
            total_pares++
            $("#total_pares").html(total_pares)
            carta1 = ""
            carta2 = ""
        }    
    }
    
    if( total_pares>=8){
        alert("Has Ganado")
        
        $('img').each(function(){
            $(this).attr('src','Imagenes/Craft.png')
            $(this).attr('data-estado','0')
        })
        total_pares=0;
        Fails = 0;
        $("#total_pares").html(total_pares)
        par=false
        carta1=""
        carta2=""
        return;
    }
    });
});


