import instance from "../api";

export default {
  async getList() {
    return await instance.get("/instrument/active").then(resp => resp.data);
  },
  async getHistoryQuote(symbol) {
    return await instance
      .get(
        `/trade/bucketed?binSize=1m&partial=false&count=100&reverse=true&symbol=${symbol}`
      )
      .then(resp => resp.data);
  },
  async orderSend(data) {
    return await instance
      .post('/order', data)
      .then(resp => resp.data);
  },
  async getOrders() {
    return await instance
      .get('/order')
      .then(resp => resp.data);
  }
};
