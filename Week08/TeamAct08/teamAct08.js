const url = 'https://swapi.dev/api/people/';

const button = document.getElementById('apibutton');
const outputDiv = document.getElementById('output');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('previous');


button.addEventListener('click', () => {

    fetch(url)

    .then((response) => {
    if(response.ok) {
        return response.json();
    }
    throw Error( response.statusText);
    })
    .then(data =>{outputDiv.innerText =  Object.entries(data)})
    .catch(error => console.log('There was an error:', error))



}, false);