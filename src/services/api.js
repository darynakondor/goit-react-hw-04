import axios from "axios"

const accessKey = import.meta.env.VITE_ACCESS_KEY; 

export const requestPhotosBySearchValue = async (searchValue, page = 1, perPage = 10) => {
    const {data} = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
            query: searchValue,
            page: page,
            per_page: perPage,
            client_id: accessKey,
        },
    });
    return data;
}