import axios from 'axios'
import crypto from 'crypto'
const expires = Math.round(new Date().getTime() / 1000) + 60
const API_KEY = '48GphC_MTWN_0ntW4V1osU4S'
const API_SICRET = '-hoVHM9kC1JRwlQBPjYdzosCCpKl7CNtomzyCTGVoLcQ5PSV'
const path = '/api/v1/order'

const instance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json'
    }
})

function generateSignature(data, method) {
    const methodInst = method === 'post' ? 'POST' : 'GET'
    console.log(methodInst, path, expires, (data ? data : ''));
    return crypto.createHmac('sha256', API_SICRET).update(methodInst + path + expires + (data ? data : '')).digest('hex')
}

instance.interceptors.request.use( (config) => {
    if (config.url === "/order") {
        config.headers['api-key'] = API_KEY
        config.headers['api-signature'] = generateSignature(config.data, config.method)
        config.headers['api-expires'] = expires
    }
    return config
})

export default instance