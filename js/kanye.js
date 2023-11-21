
const kanyeSays = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => setHtml(data))
}

const setHtml = data =>{
    const p = document.getElementById('p');
    p.innerHTML = data.quote;
}

