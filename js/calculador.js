var inputs;
var medidas = [
    { value: 1, amount: 0 },
    { value: 0.6, amount: 0 },
    { value: 1.1, amount: 0 },
    { value: 0.2, amount: 0 },
    { value: 0.5, amount: 0 }
]

function plus(idx) {
    let medida = this.medidas[idx];
    medida.amount = Number((medida.amount + 1).toFixed(1));
    this.change(idx);
}

function down(idx) {
    let medida = this.medidas[idx];
    if (medida.amount > 0) {
        medida.amount = Number((medida.amount - 1).toFixed(1));
    }
    this.change(idx);
}

function calc() {
    var soma = 0;
    for (const medida of this.medidas) {
        soma = Number((soma + (medida.value * medida.amount)).toFixed(1));
    }
    document.getElementById('result').innerHTML = soma;
}

function change(idx) {
    let input = this.inputs.item(idx)
    input.value = medidas[idx].amount;
    this.calc();
}

function createElements(){
    let itens = document.getElementsByClassName('itens')[0];
    for (let idx = 0; idx < this.medidas.length; idx++) {
        let div = document.createElement("div");
        div.classList.add("number-input");
        let down = document.createElement("button");
        down.setAttribute("onclick", `down(${idx})`);
        down.classList.add('down');
        let plus = document.createElement("button");
        plus.setAttribute("onclick", `plus(${idx})`);
        plus.classList.add('plus');
        let input = document.createElement('input');
        input.setAttribute("onchange", `change(${idx})`)
        input.setAttribute("min", "0")
        input.setAttribute("name", `valor${idx + 1}`)
        input.setAttribute("type", "number")
        input.setAttribute("value", "0")
        input.classList.add("valor")
        div.appendChild(down)
        div.appendChild(input)
        div.appendChild(plus)
        itens.appendChild(div);
    }
    this.inputs = document.getElementsByClassName('valor');
}

document.onload = (this.createElements());
