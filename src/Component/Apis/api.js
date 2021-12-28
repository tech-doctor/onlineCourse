import axios from "axios";

export default axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3",
})