const loadDataFromDb = async (item) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`;
    const res = await fetch(url);
    const data = await res.json();
    everyData(data.meals);
}

const everyData = (data) => {
    console.log(data);


    const divContainer = document.getElementById('div-container')
    divContainer.innerHTML = '';
    data.forEach((item) => {
        // console.log(item.idMeal);
        // div child of div container 
        const div = document.createElement('div');
        div.classList.add('col-4');
        // modal cards 
        div.innerHTML = `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${item.strMealThumb}" class="img-fluid h-100 rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${item.strMeal}</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <!-- Button trigger modal -->
                            <button onclick="loadDataModalId(${item.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Datails
                            </button>
                        </div>
                    </div>
                </div>
             </div>  
`;
        divContainer.appendChild(div);

    });
}


// meal id load from each card 
const loadDataModalId = async (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    const res = await fetch(url);
    const data = await res.json();
    modal(data);
    console.log(data.meals[0].idMeal);
}

const modal = (data) => {
    // modal title 
    const modalTitle = document.getElementById('exampleModalLabel');
    modalTitle.innerText = `${data.meals[0].strMeal}`;
    // modal body 
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
    
            <div class="text-center">
                 <img style="max-width: 200px" class="mb-3 rounded" 100px" src="${data.meals[0].strMealThumb}">
            </div>
    
             <p class="text-justify mb-2"> 
                <span class="fw-semibold">Details:</span> Lorem 
                ipsum dolor sit amet consectetur adipisicing elit. Laboriosam autem unde consequuntur error excepturi eaque voluptate obcaecati dolorum, ut itaque explicabo reiciendis ullam recusandae sed natus perferendis placeat laudantium nesciunt.
             </p>
             
             <p>
                <span class="fw-semibold">Youtube: <a target="_blank" href="${data.meals[0].strYoutube}">Click here</a></span>
             </p>
     `;
}

document.getElementById('search-btn').addEventListener('click', function () {

    const searchField = document.getElementById('search-field').value;
    if( searchField == ''){
        window.alert('Please give the item!');
    }
    else{
        loadDataFromDb(searchField);
    }
})

loadDataFromDb('rice');
