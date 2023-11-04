const buttonAdd = document.getElementById("buttonInput");
const divClient = document.getElementById("divClient");

let  client = [];

class bancoClient {
    constructor(nome, documento, saldo){
        this.nome = nome;
        this.documento = documento;
        this.saldo = saldo;
    }

    depositar(){
        this.saldo = parseFloat(this.saldo) + 100;
    }

    sacar(){
        this.saldo = parseFloat(this.saldo) - 100;
    }
};

buttonAdd.addEventListener("click", (e) => {
    e.preventDefault();
    let inpNome = document.getElementById("nameInput").value;
    let inpDocumento = document.getElementById("documentInput").value;
    let inpSaldo = document.getElementById("inputSaldo").value;

    if (inpNome && inpDocumento && inpSaldo){
        client.push(new bancoClient(inpNome, inpDocumento, inpSaldo));
        
        document.getElementById("nameInput").value = '';
        document.getElementById("documentInput").value = '';
        document.getElementById("inputSaldo").value = ''; 
    }

    clientList();


});



function clientList () {
    divClient.replaceChildren();

    client.forEach((Element) => {
        let novaDiv = document.createElement("div");
        let buttonDepositar = document.createElement("button");
        let buttonSacar = document.createElement("button");
        let textoNome = document.createElement("p");
        textoNome.textContent = `Nome: ${Element.nome}`;
        let textoDocumento = document.createElement("p");
        textoDocumento.textContent = `Documento: ${Element.documento}`;
        let textoSaldo = document.createElement("p");
        textoSaldo.textContent = `Saldo: ${Element.saldo}`;

        buttonDepositar.textContent = `Depositar 100`;
        buttonDepositar.onclick = () => {
            Element.depositar();
            clientList();
        }

        buttonSacar.textContent = `Retirar 100`;
        buttonSacar.onclick = () => {
            Element.sacar();
            clientList();
        }

        let divInfor = document.createElement("div");
        divInfor.appendChild(textoNome);
        divInfor.appendChild(textoDocumento);
        divInfor.appendChild(textoSaldo);
        divInfor.appendChild(buttonDepositar);
        divInfor.appendChild(buttonSacar);

        novaDiv.appendChild(divInfor);
        novaDiv.classList.add("client");
        divClient.appendChild(novaDiv);
    });
    console.log(client);
}
