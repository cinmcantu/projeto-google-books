import axios from "axios"

export const searchApi = (params) => axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${params}`)
        .then(({ data }) => data)

