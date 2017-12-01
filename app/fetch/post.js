export const post = (url,paramsObj) => {
    let result = fetch(url, {
        method: 'POST',
        body: objparams(paramsObj)
    });
    return result;
};

const objparams = (obj) => {
    let result = '';
    let item;
    for (item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }

    if(result) {
        result = result.slice(1);
    }

    return result;
}