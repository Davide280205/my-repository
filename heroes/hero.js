// https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json

// funzione con json

async function populate() {

    const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

    // la parola new Request crea un nuovo oggetto

    const request = new Request(requestURL);

    // permette di ottenere delle risorse via javascript come immagini...

    // la funzione fetch è asincorna

    const response = await fetch(request);

    // una volta cercato il file online json (link tra "") da il valore alla variabile superHeroes

    const superheroes = await response.json();

    populateHeader(superheroes);

    populateHeroes(superheroes)

    // funzione asinc = asincrona

}

// funzione per popolare l'header della pagina html

function populateHeader(obj){

    const header = document.querySelector('header');

    // crea l'h1

    const myH1 = document.createElement('h1');

    myH1.textContent = obj.squadName;

    header.appendChild(myH1);

    // creazione paragrafo

    const myPara = document.createElement('p');

    myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;

    header.appendChild(myPara);

    const myPosition = document.createElement('p');

    myPosition.textContent = `Secret Base: ${obj.secretBase}`;

    header.appendChild(myPosition);

}

function populateHeroes(obj) {

    const section = document.querySelector('section');

    const heroes = obj.members;

    // significa che per ogni eroe (const hero) che si trova nella variabile heroes crea una variabile

    for (const hero of heroes) {

        // creiamo elementi HTML

        const myArticle = document.createElement('article');

        const myH2 = document.createElement('h2');

        const myPara1 = document.createElement('p');

        const myPara2 = document.createElement('p');

        const myPara3 = document.createElement('p');

        const myList = document.createElement('ul');

        // popolo gli elementi

        myH2.textContent = hero.name;

        myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;

        myPara2.textContent = `Age: ${hero.age}`;

        myPara3.textContent = "Superpowers:";

        // ciclo tra i super-poteri di ogni eroe

        const superPowers = hero.powers;

        // inserisce listItem all'interno myList

        for(const power of superPowers) {

            const listItem = document.createElement('li');

            listItem.textContent = power;

            myList.appendChild(listItem);

        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);

    }

}

// chiamata della funzione principale

populate();