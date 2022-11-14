/* 6. Crie a função request(url, verbo='GET') que utilize o XMLHttpRequest na
forma de um Promise.
• Use-a para fazer o mesmo get que fizemos no exemplo 2. Não esqueça de tratar possíveis erros com o .catch. */

let ajax = new XMLHttpRequest();

ajax.open('GET', 'https://jsonplaceholder.typicode.com/posts');

ajax.send();

function request(url, verbo = 'GET') {
    return new Promise((resolve, reject) => {
        ajax.onload = () => {
        if (ajax.status >= 200 && ajax.status <= 299) { //OK
            resolve(ajax.response);
        } else {
            reject(`${ajax.status}: ${ajax.message}`);
        }
        };
    });
}

request('https://jsonplaceholder.typicode.com')
