import axios from "axios"

export const searchApi = (query, offset, limit) => {
        let params = query
        if (offset) {
                params += `&startIndex=${offset * limit}`
        }
        return axios
                .get(`https://www.googleapis.com/books/v1/volumes?q=${params}&maxResults=${limit}`)
                .then(({ data }) => data)
}

