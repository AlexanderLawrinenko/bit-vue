import axios from "axios";
import crypto from "crypto";
const expires = Math.round(new Date().getTime() / 1000) + 60;
const API_KEY = "48GphC_MTWN_0ntW4V1osU4S";
const API_SICRET = "-hoVHM9kC1JRwlQBPjYdzosCCpKl7CNtomzyCTGVoLcQ5PSV";
const path = "/api/v1/order";

const instance = axios.create({
  baseURL: "/",
  headers: {
    "Content-Type": "application/json"
  }
});

function generateSignature(data, method) {
  const methodInst = method === "post" ? "POST" : "GET";
  return crypto
    .createHmac("sha256", API_SICRET)
    .update(methodInst + path + expires + (data ? JSON.stringify(data) : ""))
    .digest("hex");
}

instance.interceptors.request.use(config => {
  if (config.url === "/order") {
    config.headers = {
      "api-key": API_KEY,
      "api-signature": generateSignature(config.data, config.method),
      "api-expires": expires
    };
  }
  return config;
});

export default instance;
