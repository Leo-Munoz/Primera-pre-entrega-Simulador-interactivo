// MI PROYECTO ES HACER EL SITIO WEB PARA MI PRODUCTORA DE VIDEOS.
// EL PRIMER PASO ES HACER UN COTIZADOR. DEPENDIENDO DEL SERVICIO QUE QUIERES, TE ENTREGA UN VALOR TOTAL.

alert("Bienvenido al cotizador de Te Hicimos un Video, donde calculamos un aproximado de tu video")
let subtitulos = confirm("Quieres que tu video tenga subtitulos?")
if (subtitulos === true) {
    subtitulos = 500;
    alert("Recibido, tendrá subtitulos.");
} else {
    subtitulos = 0;
    alert("Ok, sin subtitulos.")
}

let videosPropios = confirm("Quieres incluir videos propios?")
if (videosPropios === true) {
    videosPropios = 400;
    alert("Recibido, editaremos tus videos propios.");
} else {
    videosPropios = 0;
    alert("Confirmado, sin videos propios.")
}


let musica1 = confirm("Quieres que tu video tenga música?")
if (musica1 === true) {
    musica1 = 300;
    let tipoDeMusica = prompt("Solo por curiosidad, ¿Qué tipo de música quieres en tu video?:\n Ingresa 1 - SENTIMENTAL\n Ingresa 2 - FOLK\n Ingresa 3 - EPICA\n Ingresa 0 - OTRA");
    while (tipoDeMusica != "no") {
        switch (tipoDeMusica) {
            case "0":
                prompt("Que estilo de música tienes en mente?");
                break;
            case "1":
                alert("Ok, nos pondremos sentimentales.");
                break;
            case "2":
                alert("Ok, que suenen las guitarras acústicas.");
                break;
            case "3":
                alert("Ok, llamen a Hans Zimmer.");
                break;
            default:
                alert("Debes ingresar una de las opciones.");
                break;
        }
        tipoDeMusica = prompt("¿Quieres otro tipo de música en tu video? Si escribes no, continuamos:\n Ingresa 1 - SENTIMENTAL\n Ingresa 2 - FOLK\n Ingresa 3 - EPICA\n Ingresa 0 - OTRA")
    }
    alert("Perfecto, tendrá música.");
}

else if (musica1 === false) {
    let musica1 = confirm("Seguro? Te sugiero que le agregues música")
    if (musica1 === true) {
        musica1 = 300;
        let tipoDeMusica = Number(prompt("Solo por curiosidad, ¿Qué tipo de música quieres en tu video?:\n Ingresa 1 - SENTIMENTAL\n Ingresa 2 - FOLK\n Ingresa 3 - EPICA\n Ingresa 0 - OTRA"))
        while (tipoDeMusica != "0") {
            switch (tipoDeMusica) {
                case 1:
                    alert("Ok, nos pondremos sentimentales.")
                    break;
                case 2:
                    alert("Ok, que suenen las guitarras acústicas.")
                    break;
                case 3:
                    alert("Ok, llamen a Hans Zimmer.")
                    break;
                default:
                    alert("Debes ingresar una de las opciones")
                    break;
            }
            musica1 = 0;
            let otraMusica = prompt("Que estilo de música tienes en mente?")
        }
    }
}

let duracion = Number(prompt("Cuantos minutos crees que durará tu video? \n (debes ingresar un numero)"));

while (duracion <= 0) {
    alert("Debes elegir al menos un minuto.");
    duracion = Number(prompt("Cuantos minutos crees que durará tu video? \n (debes ingresar un numero)"));
}
alert(`Recibido, tu video durará aproximadamente ${duracion} minutos.`);
resultado = 0;

function calculo(subtitulos, videosPropios, musica1, duracion) {
    resultado = (subtitulos + videosPropios + musica1) * duracion;
}
calculo(subtitulos, videosPropios, musica1, duracion);
alert('El valor de tu video seria de $' + resultado + ' pesos.')