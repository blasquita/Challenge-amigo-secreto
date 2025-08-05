// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos=[]; //array para almacenar el nombre de los amigos

function agregarAmigo() {  //funcion para agregar amigos
  let nombreAmigo = document.getElementById("amigo").value; //obtiene el dato del input y lo guarda en la variable nombreAmigo
  document.getElementById("amigo").value = ''; //limpia el input

  if (nombreAmigo == '') {  //validacion de ingreso, si no se ingresa ningun nombre se muestra un alert y returna
        alert('Por favor, ingresa un nombre'); 
        return;
    } else {
        amigos.push(nombreAmigo); //en caso contrario, se pushea en el array el nombre agarrado en el input
        mostrarLista(); //se muestra la lista de amigos, llamando la funcion
    }
}

function sortearAmigo(){ //funcion para sortear amigos
    if (amigos.length==0){ //si el tamaño del array es 0, significa que no hay amigos para sortear
        alert("No hay amigos para sortear");
    } else if (amigos.length<2) { //si el tamaño del array es menor que 2, se pide que se agreguen más amigos, ya que no tendría sentido sortear una sola persona
        alert ("Agrega más amigos para sortear")
    } else{  //en caso contrario se sortea la lista de amigos
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSeleccionado = amigos[indiceAleatorio];
        document.getElementById('resultado').innerHTML = `<li>${amigoSeleccionado}</li>`; 
    }
}

function mostrarLista() { //funcion para mostrar lista
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}