let imagenes = [
    {
        "url": "../assets/desarrollo.jpg",
        "nombre": "Servicio de Desarrollo",
        "descripcion": "Un desarrollador de servicios se define como un individuo que tiene la responsabilidad de seleccionar mecanismos de interfaz para servicios , que pueden afectar la composición y reutilización futuras."

    },
    {
        "url": "../assets/hosting.jpg",
        "nombre": "Servicio Hosting",
        "descripcion": "Es un servicio de alojamiento web que te permite publicar un sitio web o aplicación en Internet."

    },
    {
        "url": "../assets/communityManagger.jpg",
        "nombre": "Comunity Managger",
        "descripcion": "Un community manager se encarga de construir, ampliar y administrar comunidades online."

    },
]


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  
adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}