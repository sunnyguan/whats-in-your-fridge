const API_URL = "https://c1-fridge-api.herokuapp.com"

export function getUserList(name) {
    return fetch(`${API_URL}/get?name=${name}`)
            .then(res => res.json())
            .then(data => data["food"]);
}

export function addToList(name, item) {
    return fetch(`${API_URL}/add?name=${name}&item=${item}`)
            .then(res => res.json())
            .then(data => data["food"]);
}

export function removeFromList(name, item) {
    return fetch(`${API_URL}/remove?name=${name}&item=${item}`)
            .then(res => res.json())
            .then(data => data["food"]);
}

export function getRecipes(items) {
    let url = `${API_URL}/recipe?`;
    let out = [];
    for(let item of items) 
        out.push('item=' + encodeURIComponent(item));
    url += out.join('&');
    return fetch(url).then(res => res.json());
}