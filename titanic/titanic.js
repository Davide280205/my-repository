async function populate() {

    const requestURL = "https://davide280205.github.io/my-repository/JSON/passeggeri.json";

    const request = new Request(requestURL);

    const response = await fetch(request);

    const Titanic = await response.json();

    populateCards(Titanic);

}

function populateCards(obj) {

    const section = document.querySelector('section');

    const members = obj.passenger;

    for (const passenger of members) {

        const myArticle = document.createElement('section');

        const myDiv = document.createElement('article');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myPara4 = document.createElement('p');
        const myPara5 = document.createElement('p');
        const myPara6 = document.createElement('p');

        myDiv.textContent = `Name: ${passenger.Name}`;
        myPara2.textContent = `Classe: ${passenger.Pclass}`;
        myPara3.textContent = `Survived: ${passenger.Survived}`;
        myPara4.textContent = `Sex: ${passenger.Sex}`;
        myPara5.textContent = `Age: ${passenger.Age}`;
        myPara6.textContent = `Sopravvissuto: ${passenger.Embarked}` ? 'SI' : 'NO';
        
        myArticle.appendChild(myDiv);
        myDiv.appendChild(myPara2);
        myDiv.appendChild(myPara3);
        myDiv.appendChild(myPara4);
        myDiv.appendChild(myPara5);
        myDiv.appendChild(myPara6);
        section.appendChild(myDiv);

    }
}


populate();