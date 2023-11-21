
const getMailsData = (item) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`)
        .then(res => res.json())
        .then(data => { mainWorkHere(data); console.log(data) })
}


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
                          <a href="${item.strYoutube}">go for Video</a>
                        </div>
                      </div>
          `;
        //appendChild      
        divContainer.appendChild(innerDiv);

    })
}

//
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

document.getElementById('search-btn').addEventListener('click', function click() {
    search();
});