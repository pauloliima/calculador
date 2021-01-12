// os cômodos e seus itens
var comodos = {
    salon: [
        { name: "Meuble TV", imgSrc: "meubles-tv.png", value: 1, amount: 0 },
        { name: "TV", imgSrc: "tv.png", value: 1, amount: 0 },
        { name: "Grand TV", imgSrc: "tv grand.png", value: 1.1, amount: 0 },
        { name: "Lustre", imgSrc: "lustre.png", value: 0.2, amount: 0 },
        { name: "Meuble hifi", imgSrc: "meuble-hifi.png", value: 0.5, amount: 0 },
        { name: "Fauteuil", imgSrc: "FAUTEUIL.png", value: 0.5, amount: 0 },
        { name: "Canapé 3 places", imgSrc: "canape 3 places.png", value: 3, amount: 0 },
        { name: "Canapé 2 places", imgSrc: "canape 2 places.png", value: 2, amount: 0 },
        { name: "Buffet", imgSrc: "buffet.png", value: 2, amount: 0 },
        { name: "Piano", imgSrc: "piano.png", value: 1.5, amount: 0 },
        { name: "Table basse", imgSrc: "table-basse.png", value: 1.1, amount: 0 },
        { name: "Chaise", imgSrc: "chaise.png", value: 0.3, amount: 0 },
        { name: "Bibliotèque", imgSrc: "bibliotheque.png", value: 1, amount: 0 },
        { name: "Cadre", imgSrc: "cadre-photo.png", value: 0.2, amount: 0 },
    ],
    cuisine: [
        { name: "Meuble haut", imgSrc: "hightcabinet.png", value: 0, amount: 0 },
        { name: "Table", imgSrc: "table.png", value: 0, amount: 0 },
        { name: "Chaise", imgSrc: "chaise.png", value: 0, amount: 0 },
        { name: "Réfrigérateur", imgSrc: "refrigerateur.png", value: 0, amount: 0 },
        { name: "Congélateur", imgSrc: "congelateur.png", value: 0, amount: 0 },
        { name: "Lave-linge", imgSrc: "LAVE-LINGE.png", value: 0, amount: 0 },
        { name: "Lave-vaisselle", imgSrc: "LAVE-VAISSELLE.png", value: 0, amount: 0 },
        { name: "Casseroles, Poeles", imgSrc: "CASSEROLES, POELES.png", value: 0, amount: 0 },
        { name: "Plaques de cuisson", imgSrc: "PLAQUES DE CUISSON.png", value: 0, amount: 0 },
        { name: "Micro-ondes", imgSrc: "microondas.png", value: 0, amount: 0 },
        { name: "Four", imgSrc: "four.png", value: 0, amount: 0 },
        { name: "Cuisinière", imgSrc: "cuisiniere.png", value: 0, amount: 0 },
        { name: "Meuble bas", imgSrc: "lowcabinet1.png", value: 0, amount: 0 }
    ],
    chambre: [
        { name: "Lit 2 places", imgSrc: "LIT 2 PLACES.png", value: 0, amount: 0 },
        { name: "Penderie", imgSrc: "PENDERIE1.png", value: 0, amount: 0 },
        { name: "Miroir (glace)", imgSrc: "mirror.png", value: 0, amount: 0 },
        { name: "Chiffonier", imgSrc: "chiffonier.png", value: 0, amount: 0 },
        { name: "Blibliothèque", imgSrc: "bibliotheque.png", value: 0, amount: 0 },
        { name: "Commode", imgSrc: "commode.png", value: 0, amount: 0 },
        { name: "Armoire", imgSrc: "ARMOIRE.png", value: 0, amount: 0 },
        { name: "Chevet", imgSrc: "chevet.png", value: 0, amount: 0 },
        { name: "Lit superposé", imgSrc: "lit-superpose.png", value: 0, amount: 0 },
        { name: "Mezzanine", imgSrc: "mezzanine.png", value: 0, amount: 0 },
        { name: "Lit 1 place", imgSrc: "LIT 1 PLACE.png", value: 0, amount: 0 },
        { name: "Secrétaire", imgSrc: "secretary.png", value: 0, amount: 0 },
    ],
    bureau: [
        { name: "Bureau", imgSrc: "bureau.png", value: 0, amount: 0 },
        { name: "Chaise", imgSrc: "chaise-de-bureau.png", value: 0, amount: 0 },
        { name: "Meuble de rangement", imgSrc: "MEUBLE DE RANGEMENT.png", value: 0, amount: 0 },
        { name: "Bibliothèque", imgSrc: "BIBLIOTHÈQUE.png", value: 0, amount: 0 },
        { name: "Ordinateur", imgSrc: "ordinateur.png", value: 0, amount: 0 },
        { name: "Fax", imgSrc: "fax.png", value: 0, amount: 0 },
        { name: "Imprimante", imgSrc: "imprimante.png", value: 0, amount: 0 },
    ],
    divers: [
        { name: "Parasol", imgSrc: "parasol.png", value: 0, amount: 0 },
        { name: "Aspirateur", imgSrc: "aspirateur.png", value: 0, amount: 0 },
        { name: "Carton livre", imgSrc: "CARTON LIVRE.png", value: 0, amount: 0 },
        { name: "Carton standard", imgSrc: "CARTON STANDARD.png", value: 0, amount: 0 },
        { name: "Chaine WiFi", imgSrc: "chaine-wifi.png", value: 0, amount: 0 },
        { name: "Livres", imgSrc: "livre.png", value: 0, amount: 0 },
        { name: "CD, DVD", imgSrc: "cddvd.png", value: 0, amount: 0 },
        { name: "Miroirs", imgSrc: "mirrors.png", value: 0, amount: 0 },
        { name: "Lampe", imgSrc: "lampe.png", value: 0, amount: 0 },
        { name: "Établi", imgSrc: "Établi.png", value: 0, amount: 0 },
        { name: "Chaise de jardin", imgSrc: "CHAISE DE JARDIN.png", value: 0, amount: 0 },
        { name: "Poussette de bebe", imgSrc: "poussette-de-bebe.png", value: 0, amount: 0 },
        { name: "Tondeuse a gazon", imgSrc: "tondeuse-a-gazon.png", value: 0, amount: 0 },
        { name: "Transat", imgSrc: "transat.png", value: 0, amount: 0 },
        { name: "Velo", imgSrc: "velo.png", value: 0, amount: 0 },
    ]
}

var comodosNames = Object.keys(comodos); // o nome dos cômodos ['salon', 'cuisine'...]
var currentComodo = comodosNames[0]; // o cômodo atual
var inputs; // os <inputs> dos itens no HTML

/** 
 * Adiciona 1 à quantidade do item clicado 
 * @param {number} idx - O índice do item em seu cômodo
 */
function plus(idx) {
    let item = this.comodos[currentComodo][idx];
    item.amount = Number((item.amount + 1).toFixed(1));
    this.change(idx);
}

/** Diminui em 1 a quantidade do item clicado, se este for maior que 0 */
function down(idx) {
    let item = this.comodos[currentComodo][idx];
    if (item.amount > 0) {
        item.amount = Number((item.amount - 1).toFixed(1));
    }
    this.change(idx);
}

/** Atualiza inputs na tela */
function change(idx) {
    let input = this.inputs.item(idx)
    input.value = comodos[currentComodo][idx].amount;
    this.calc();
}

/** Calcula volume total dos itens e atualiza o resultado no html */
function calc() {
    var soma = 0;
    for (const comodo of comodosNames) {
        for (const item of this.comodos[comodo]) {
            soma = Number((soma + (item.value * item.amount)).toFixed(1));
        }
    }
    document.getElementById('result').innerHTML = soma;
}


/** 
 * cria os itens de acordo com a navegação atual
 * @param {string} comodo - A navegação atual
 */
function createElements(comodo) {
    this.currentComodo = comodo;
    document.getElementById('comodos').innerHTML = ""; // remove todos os itens do html
    for (const item of this.comodos[currentComodo]) {
        // item a ser mostrado na tela
        const idx = this.comodos[currentComodo].indexOf(item);

        // conteiner para o item
        let article = document.createElement("article");
        article.classList.add('itens');

        // div da imagem e nome do item
        let imgDiv = document.createElement("div");
        imgDiv.classList.add('imagem');

        // Nome do item
        let imgTitle = document.createElement("h6");
        imgTitle.innerHTML = item.name.toUpperCase();

        // imagem do item
        let img = document.createElement("img");
        img.id = 'img';
        img.src = `./img/${comodo}/${item.imgSrc}`;        

        // div de input e botões
        let numberDiv = document.createElement("div");
        numberDiv.classList.add("number-input");

        // botão down
        let down = document.createElement("button");
        down.setAttribute("onclick", `down(${idx})`);
        down.classList.add('down');

        // input de quantidade
        let input = document.createElement('input');
        input.setAttribute("onchange", `change(${idx})`)
        input.setAttribute("min", "0")
        input.setAttribute("name", `valor${idx + 1}`)
        input.setAttribute("type", "number")
        input.setAttribute("value", item.amount)
        input.classList.add("valor")

        // botão plus
        let plus = document.createElement("button");
        plus.setAttribute("onclick", `plus(${idx})`);
        plus.classList.add('plus');

        // montando html
        imgDiv.appendChild(imgTitle);
        imgDiv.appendChild(img);
        article.appendChild(imgDiv);
        numberDiv.appendChild(down)
        numberDiv.appendChild(input)
        numberDiv.appendChild(plus)
        article.appendChild(numberDiv);
        document.getElementById('comodos').appendChild(article);
    }
    this.inputs = document.getElementsByClassName('valor');
}


/** Cria os botãoes de navegação */
function createButtons() {
    let container = document.getElementsByClassName('multi-button')[0];
    for (const comodo of comodosNames) {
        let button = document.createElement('button');
        button.setAttribute("onclick", `createElements('${comodo}')`);
        let a = document.createElement('a');
        a.setAttribute("id", 'link');
        a.innerHTML = comodo.toUpperCase();
        button.appendChild(a);
        container.appendChild(button);
    }
}

document.onload = (
    createButtons(),
    createElements(currentComodo)
);
