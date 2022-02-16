let is_ok = true;

export const customFetch = (data, timeout) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (is_ok) {
                resolve(data);
            } else {
                reject('error');
            }
        }, timeout);
    });
};