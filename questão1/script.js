let evento = document.querySelector("#inpEvento");
let data = document.querySelector("#inpData");
let buttonAdd = document.getElementById("add");
const lista = document.getElementById("lista");

let Eventos = [];

buttonAdd.addEventListener("click", () => {

    if(evento && data){
        document.getElementById("inpEvento").values = ""
        document.getElementById("inpData").values = ""
        adicionarEvento(evento.value, data.value);
    }
    console.log(Eventos);
});

function adicionarEvento(texto, data){
    let objeto = {
        nome: texto,
        time: data
    }
    Eventos.push(objeto);
    Eventos.sort((antes, depois) => antes.time.localeCompare(depois.time));
    mostrarArray();
}

function mostrarArray(){
    lista.replaceChildren();

    Eventos.array.forEach(element => {
        let novoEvento = document.createElement("div");
        let texto = document.createElement("p");
        let dataFormatada = formdata(element.data);
        texto.textContent = `evento: ${element.nome} Data: ${dataFormatada}`;
        novoEvento.appendChild(texto);
        lista.appendChild(novoEvento);
    });
}

function formdata(data) {
    let ano = data.getFullYear();
    let mes = data.getMonth() + 1;
    let dia = data.getDate();

    return `${dia}/${mes}/${ano}`;
}
