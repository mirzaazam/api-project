
const countriesData = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => countryShow(data))
}

const countryShow = (data) => {
    const divContainer = document.getElementById('div-container');
    data.forEach((data) => {
        // console.log(data)
        const div = document.createElement('div');
        div.innerHTML = `
            <p>Name: ${data.name.common}</p>
            <p>Capital: ${data.capital}</p>
            <button onclick="showFlag('${data.cca2}')">Details</button>

        `;
        div.classList.add('class');
        divContainer.appendChild(div);
    })

}

const showFlag = (code) => {
    const url = (`https://restcountries.com/v3.1/alpha/${code}`);
    fetch(url)
        .then(res => res.json())
        .then(data => { show(data); console.log(data) })
    //  console.log(url);

    const show = (data) => {
        console.log(data[0].name)
        const flag = document.getElementById('flag');
        flag.innerHTML = `'
            <h2>Name: ${data[0].name.common}</h2>
            <img src="${data[0].flags.png}">
        `
    }
}


countriesData();