import MainApi from "./MainApi";
import { ImageData } from "./MainTypes";

export default class MainService{
    mainApi: MainApi;

    constructor(){
        this.mainApi = new MainApi();
    }

    getImages = async(): Promise<ImageData[]> =>{
        const {data} = await this.mainApi.getImages()
return data;
    }
}