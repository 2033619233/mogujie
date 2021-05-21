import axios from 'axios'
export function request(config, success, failure) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            baseURL: 'http://106.54.54.237:8000/api/mn',
            timeout: 1000,
        });
        instance(config)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                console.log("请求失败");
            })
    })
}
