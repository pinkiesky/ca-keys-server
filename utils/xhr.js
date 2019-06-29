export default async function xhrReq(method, url, payload = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.send(payload);

        xhr.onreadystatechange = () => {
            if (xhr.readyState != 4) return;
            if (xhr.status != 200) {
                reject(xhr);
            } else {
                resolve(xhr.responseText);
            }
        }
    });
}

export const getReq = (url, payload) => xhrReq('GET', url, payload);
export const postReq = (url, payload) => xhrReq('POST', url, payload);
