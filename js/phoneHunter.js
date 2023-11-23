
const fetchAllData = async (searchText) => {
    const url = (`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data);  // Log the entire response
    phonesItem(data.data);
}

const phonesItem = (data) => {
    phonesContainer = document.getElementById('phones-container');
    //stop spanner
    const spnner = document.getElementById('spenner');
    spnner.classList.add('d-none');

    //search phone no found!
    const noFoundNoti = document.getElementById('phone-noFound');
    if(data.length == 0){
        noFoundNoti.classList.remove('d-none');
    }
    else{
        noFoundNoti.classList.add('d-none');
    }
    phonesContainer.innerHTML = ' ';
    data.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
                <img src="${item.image}" class="card-img-top p-3" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `;
        phonesContainer.appendChild(div);
        
    })
}

// search item show here 

const searchFromField = () =>{
    const field = document.getElementById('search-field').value;
    //start spanner
    const spnner = document.getElementById('spenner');
    spnner.classList.remove('d-none');

    fetchAllData(field);
}

// fetchAllData('vivo');