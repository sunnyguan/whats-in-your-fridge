const API_URL = "https://c1-fridge-api.herokuapp.com"

export function getUserList(name) {
    return fetch(`${API_URL}/get?name=${name}`)
            .then(res => res.json())
}

export function addToList(name, item,amount,unit) {
    return fetch(`${API_URL}/add?name=${name}&item=${item}&amount=${amount}&unit=${unit}`)
            .then(res => res.json())
}

export function removeFromList(name, item) {
    return fetch(`${API_URL}/remove?name=${name}&item=${item}`)
            .then(res => res.json())
}

export function getRecipes(name) {
    let url = `${API_URL}/recipeFake?name=${name}`; // remove fake
    return fetch(url).then(res => res.json());
}

export function addToSpending(name, item) {
    return fetch(`${API_URL}/spending/add?name=${name}&item=${item}`)
            .then(res => res.json())
}

export function removeFromSpending(name, item) {
    return fetch(`${API_URL}/spending/remove?name=${name}&item=${item}`)
            .then(res => res.json())
}

export function scanReceipt(image) {
    return fetch(`${API_URL}/receipt`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(image)
    }).then(res => res.json());
}