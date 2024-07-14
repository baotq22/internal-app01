import axios from "axios";
import { BASE_URL } from "../utils/app.js";

const Http = axios.create({
    baseURL: BASE_URL,
})

export default Http;