
import axios from "axios"

export const REACT_APP_GOOGLE_MAPS_KEY =
  "";

export const API_BASE_URL = "http://localhost:6565"
const jwt = localStorage.getItem("jwt")

export const api = axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Authorization": `Bearer ${jwt}`,
        'Content-Type': "application/json"
    }
})