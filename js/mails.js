//fetch data every item
const getMailsData = (item) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`)
        .then(res => res.json())
        .then(data => { mainWorkHere(data); console.log(data) })
}

// all work here
const mainWorkHere = data => {
    const meals = data.meals;
    const divContainer = document.getElementById('div-container');
    divContainer.innerHTML = '';

    //search for each item
    meals.forEach(item => {
        //create a div
        const innerDiv = document.createElement('div');
        //add a class
        innerDiv.classList.add('col');
        //set value
        innerDiv.innerHTML = `
            <div class="card h-100">
                        <img src="${item.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${item.strMeal}</h5>
                          <p class="card-text">This is good food for health</p>
                          <a href="${item.strSource}">go for details</a> <br>
                          <a href="${item.strYoutube}">go for Video</a> <br>
                          <button onclick="modal(${item.idMeal})" type="button" class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Details</button>
                        </div>
                      </div>
          `;
        //appendChild      
        divContainer.appendChild(innerDiv);

    })
}

//search field and condition.
const search = () => {
    const inputField = document.getElementById('input-field').value;
    console.log(inputField)
    if (inputField == '') {
        alert('Please write any food!')
    }
    else {
        getMailsData(inputField);
    }
}


//add event Listner
document.getElementById('search-btn').addEventListener('click', function click() {
    search();
});


//open modal when click the details btn on the card
const modal = (idMeal) => {
    const url = (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
    fetch(url)
        .then(res => res.json())
        .then(data => {setInfoModal(data.meals[0]); console.log(data.meals[0])})

    const setInfoModal = (data) => {
        document.getElementById('staticBackdropLabel').innerText = data.strMeal;
        const modalBody = document.getElementById('modal-body');
        modalBody.innerHTML = `
            <img class="img-fluid" src="${data.strMealThumb}">
        `;
    }
}