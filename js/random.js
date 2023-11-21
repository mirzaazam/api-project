

const random = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => getInfo(data))
    
}

 const getInfo = data =>{
    const divContainer = document.getElementById('div-container');
    const name = document.createElement('p');
    name.innerText = `Name: ${data.results[0].name.title + ' ' + data.results[0].name.first + ' ' + data.results[0].name.last}`
    
    const p = document.createElement('img');
    divContainer.innerHTML = `
    <img src="${data.results[0].picture.medium}">
    `;
    
    const location = document.createElement('p');
    location.innerText = ` Country: ${data.results[0].location.country}`;

        divContainer.appendChild(name);
        // divContainer.appendChild(p);
        divContainer.appendChild(location);
 }

random();