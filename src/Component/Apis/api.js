import axios from "axios";

export default axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3",
});

export const  BASE_URL = process.env.REACT_APP_SERVER_URL;