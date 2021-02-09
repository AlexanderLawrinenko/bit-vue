import instance from "../api"

export default {
    async getList () {
        return await instance.get('/instrument/active').then(resp => resp.data)
    }
}