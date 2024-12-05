import { AxiosResponse } from "axios"
import { API } from "../core/api"
import { ImageData } from "./MainTypes"
import { apiKey } from "./MainStore"

export default class MainApi{
    getImages = async(page:number): Promise<AxiosResponse<ImageData[]>> => {
         return await API.get(`/curated?&page=${page}`,{
                    headers:{
                        'Authorization': apiKey
                    },
                })

    }
}

