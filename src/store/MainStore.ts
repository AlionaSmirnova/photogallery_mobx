import {
 
  makeAutoObservable,
  runInAction,
} from 'mobx';
import MainService from './MainServices';
import  {ImageData } from './MainTypes';

export const apiKey =
  'JnEbdfcQkZD6eshLELpCbczYdq4fjcbFHfNChsLBzU9M2VQLK1Nv2akb';

export default class MainStore {
  loader: boolean = false;
  imageData: ImageData[] =[];

  error: any = null;

  private mainService: MainService;

  constructor() {
    makeAutoObservable(this);
    this.mainService = new MainService();
  }

  getImages = async(page:number) => {
    this.setIsLoading(true);
  
    try {
      const res = await this.mainService.getImages(page);
      console.log('result', res);
      //next_page - ссылка на следующую страницу
      runInAction(() => {
        this.imageData = res;
      });

    } catch (e) {
      console.log('Error', e);
    } finally {
      this.setIsLoading(false);
    }
  };

  setIsLoading = (value: boolean) => {
    runInAction(() => {
      this.loader = value;
    });
  };
}
