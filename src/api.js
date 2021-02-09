import axios from 'axios'

// const API_KEY = '48GphC_MTWN_0ntW4V1osU4S'
// const API_SICRET = '-hoVHM9kC1JRwlQBPjYdzosCCpKl7CNtomzyCTGVoLcQ5PSV'

const instance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default instance