import MainApi from "./MainApi";
import { ImageData } from "./MainTypes";

export default class MainService{
    mainApi: MainApi;

    constructor(){
        this.mainApi = new MainApi();
    }

    getImages = async(page:number): Promise<ImageData[]> =>{
        const {data} = await this.mainApi.getImages(page)
return data;
    }
}