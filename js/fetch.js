
//main work of Load Data2 button.
function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))

}
//main work of Load Data button.
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(d => data(d))

    function data(d) {
        console.log(d);
    }

}
//main work of Get Data button.
function getData() {
    // fetch data from datastore
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => loadData(data))

    //crate div>ul>crate li then set list data than apped to div>ul.
    const ul = document.getElementById('put-li');
    function loadData(data) {
        for (const item of data) {
            const li = document.createElement('li');
            li.innerText = item.username;
            ul.appendChild(li);
        }
    }
}

//another practice
function anotherData() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => dataFetch(data))

    function dataFetch(data) {
        const ulSecond = document.getElementById('2nd-ul');
        for (const item of data) {
            const titleOfData = item.title;
            const li = document.createElement('li');
            li.innerText = titleOfData;
            ulSecond.appendChild(li);
        }
    }
}

//post data
function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => getPostDetails(data))

    function getPostDetails(data) {
        const postDiv = document.getElementById('post-container');
        for (const item of data) {
            const div = document.createElement('div');
            div.classList.add('post');
            div.innerHTML = `
            <h3>User Id : ${item.userId}</h3>
            <h3>Id : ${item.id}</h3>
            <h3>Title : ${item.title}</h3>
            <h3>Body : ${item.body}</h3>
            `;
            postDiv.appendChild(div);

        }
    }
}

//comment data fetch from jsonholder commnet 
function CommentData() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => getCommentData(data))

    function getCommentData(data) {
        const divContainer = document.getElementById('conmment-container');
        divContainer.style.marginTop = '10px';
        for (const item of data) {
            const div = document.createElement('div');
            div.style =`
            padding: 15px;
            background-Color: red;
            `;
            div.innerHTML = `
            <p>Id : ${item.id}</p>
            <p>Name : ${item.name}</p>
            <p>Email : ${item.email}</p>
            <p>Body : ${item.body}</p>
            `;
            divContainer.appendChild(div);
        }
    }

}