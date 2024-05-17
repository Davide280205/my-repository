async function populate() {

    const requestURL = "https://davide280205.github.io/my-repository/JSON/membri.json";

    const request = new Request(requestURL);

    const response = await fetch(request);

    const peopleSpace = await response.json();

    populateHeader(peopleSpace);
    populatePerson(peopleSpace);
    populateNumber(peopleSpace);

}

function populateHeader(obj){

    const header = document.querySelector('header');

    const myH1 = document.createElement('h1');

    myH1.textContent = obj.titolo;

    header.appendChild(myH1);

}

function populatePerson(obj) {

    const section = document.querySelector('section');

    const members = obj.people;

    for (const person of members) {

        const myArticle = document.createElement('article');

        const myH2 = document.createElement('h2');

        const myPara1 = document.createElement('p');

        myH2.textContent = person.name;

        myPara1.textContent = `craft: ${person.craft}`;


        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        section.appendChild(myArticle);

    }
}

    function populateNumber(obj){

    const section = document.querySelector('section')

    const myPara2 = document.createElement('h3');

    myPara2.textContent = `Number of people in space: ${obj.number}`;

    section.appendChild(myPara2);

}

populate();
