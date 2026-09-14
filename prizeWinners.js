// array for possible winner names
const names = ['Zander Moore', 'Sam Smith', 'Aliza Gray', 'Peter Parker', 'Tony Stark', 
    'Gary Hedges', 'Murial Tagert', 'Zorian Kazinski', 'Lindon Colemen', 'Finn Mertins' ];

// array for possible winner prizes
const prizes = ['$100 gift certificate', '$50 gift certificate', 'winter scarf',
    'pair of fun sunglasses', 'candy bar'];

// finds the elements, passes variables to other functions then stores the other functions
// so it can run with a single command line
const findingElements = () => {
    let content = document.querySelector('#peopleList');
    let pList = document.querySelector('#prizeList');
    let pWinner = document.querySelector('#peopleWinner');
    let prWinner = document.querySelector('#prizeWinner');

    // calls the functions, while passing variables
    addingElements(content, pList);
    addingDocElements(pWinner, prWinner);
}
// takes each array variable for names and prizes then assigns text to that id
const addingElements = (content, pList) => {

    names.forEach(nameParam => {
        content.innerHTML += `<li>${nameParam}</li>`;
    });
    
    prizes.forEach(prizeParam => {
        pList.innerHTML += `<li>${prizeParam}</li>`;
    });

}    
// takes the id of the querySelector and the random number based on the array length 
// and adds it to the innerHTML
const addingDocElements = (pWinner, prWinner) => {
    const randomNames = Math.floor(Math.random() * names.length);
    const randomPrizes = Math.floor(Math.random() * prizes.length);

    pWinner.innerHTML += `<h3>${names[randomNames]}</h3>`
    prWinner.innerHTML = `${names[randomNames]} recives a ${prizes[randomPrizes]}`
}
// runs the function
findingElements();
