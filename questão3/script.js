const button = document.getElementById("buttonAdd");
let bodyTable = document.getElementById("bodyTable");
let saldoTotal = document.getElementById("saldoTotal");
let arrayTransações = [];

class Transação {
    constructor(texto, total){
        this.texto = texto;
        this.total = total;
    }
}

button.addEventListener("click" , (e) => {
    e.preventDefault();
    let texto = document.getElementById("inputDesc").value;
    let valor = document.getElementById("inputNumber").value;
    
    if(texto && valor){
        arrayTransações.push(new Transação(texto, valor));
        document.getElementById("inputDesc").value= "";
        document.getElementById("inputNumber").value = "";
        
        AdicionarNaTabela();
    }
    
    
    console.log(arrayTransações);
});


function AdicionarNaTabela() {
    const nova = arrayTransações[arrayTransações.length-1];

    let novaTransação = document.createElement("tr");
    let novaDescrição = document.createElement("td");
    novaDescrição.textContent = `${nova.texto}`;
    let novoValor = document.createElement("td");
    novoValor.textContent = `${nova.total}`;

    novaTransação.appendChild(novaDescrição);
    novaTransação.appendChild(novoValor);

    bodyTable.appendChild(novaTransação);

    const somaTotal = arrayTransações.reduce((acumulador, Transação) => acumulador + parseFloat(Transação.total), 0);

    saldoTotal.textContent = `${somaTotal}`;

    let tipoTransação;
    tipoTransação = (nova.total >= 0) ? "positiva" : "negativa";
    novaTransação.classList.add(tipoTransação);

}