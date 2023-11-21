
const getMailsData = (item) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`)
        .then(res => res.json())
        .then(data => {mainWorkHere(data); console.log(data)})
}


const mainWorkHere = data =>{
    const meals = data.meals;
            const divContainer = document.getElementById('div-container');

            //search for each item
            meals.forEach(item => {
                //create a div
                const innerDiv = document.createElement('div');
                //add a class
                innerDiv.classList.add('col');
                //refresh
                innerDiv.innerText = '';
                //set value
                innerDiv.innerHTML = `
            <div class="card h-100">
                        <img src="${item.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${item.strMeal}</h5>
                          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                      </div>
          `;
                divContainer.appendChild(innerDiv);

            })
        }


const search = () => {
    const inputField = document.getElementById('input-field').value;
    getMailsData(inputField);
}

