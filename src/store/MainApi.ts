import { AxiosResponse } from "axios"
import { API } from "../core/api"
import { ImageData } from "./MainTypes"
import { apiKey } from "./MainStore"

export default class MainApi{
    getImages = async(): Promise<AxiosResponse<ImageData[]>> => {
         return await API.get('/curated',{
                    headers:{
                        'Authorization': apiKey
                    },
                })

    }
}

