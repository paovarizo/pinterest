import axios from 'axios'

export default axios.create({
    baseURL:"https://api.imgur.com/3/",
    headers:{
        Authorization:"Client-ID 0dfc0f4f091bc87"
    }
})