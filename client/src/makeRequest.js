import axios from "axios";

export const makeRequest = axios.create({
    baseURL: process.env.REACK_APP_API_URL,
    headers: {
        Authorization:"bearer "+ process.env.REACK_APP_API_TOKEN
    },
});