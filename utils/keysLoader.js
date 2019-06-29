export default async function loaders(req, funcName, keyName) {
    if (req && req.$keys) {
        return req.$keys[funcName](keyName);
    }

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `/api/${funcName}?name=${keyName}`, true);
        xhr.send();

        xhr.onreadystatechange = () => {
            if (xhr.readyState != 4) return;
            if (xhr.status != 200) {
                reject(xhr);
            } else {
                resolve(JSON.parse(xhr.responseText));
            }
        }
    });
}