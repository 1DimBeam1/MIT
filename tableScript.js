async function getResponse() {
    let response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1/todos"
    );
    let content = await response.json();

    let list = document.querySelector(".data");

    for (let key in content) {
        list.innerHTML += `
            <tr class="data">
                <th>${content[key].userId}</th>
                <th>${content[key].title}</th>
                <th>${content[key].completed}</th>
            </tr>
        `;
    }
}

getResponse();