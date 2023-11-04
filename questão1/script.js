let evento = document.querySelector("#inpEvento");
let inputData = document.querySelector("#inpData");
let formulario = document.getElementById("inserir");
const lista = document.getElementById("lista");
let Eventos = [];

class objetoEvento {
    constructor(evento, data, hora) {
        this.texto = evento;
        this.time = data;
        this.hora = hora
    }
}

formulario.addEventListener("submit" , (e) => {
    e.preventDefault();

    let data = inputData.value.slice(0, 10);
    let hora = inputData.value.slice(11, 16);

    let novoObjeto = new objetoEvento(evento.value, data, hora);

    let novoEvento = document.createElement("li");
    novoEvento.textContent = `Evento: ${novoObjeto.texto}; Horario: ${novoObjeto.hora}; Data: ${novoObjeto.time}`;

    Eventos = [...Eventos, novoEvento];
    Eventos.sort();

    lista.replaceChildren(...Eventos);

    inputData.value = "";
    evento.value = "";
})