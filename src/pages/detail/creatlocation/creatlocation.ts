import { Component } from '@angular/core';
import { NavController, ViewController, ModalController } from 'ionic-angular';
import { CityDataServive } from '../../../provider/city-picker';



/**
 * Generated class for the MinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
    selector: 'page-creatlocation',
    templateUrl: 'creatlocation.html',
})
export class CreatLocationPage {
    userName
    userPhone
    detailAdress
    adressFloor
    cityData: any;
    cityName:string = "上海市-上海市-浦东新区"
    constructor(
        public NavCtrl: NavController,
        public ViewCtrl: ViewController,
        public ModalCtrl: ModalController,
        private CityData: CityDataServive
    ) {
        this.GetCityData();
    }
    Save() {
        this.ViewCtrl.dismiss({
            cityName:this.cityName,
            userName:this.userName,
            userPhone:this.userPhone,
            detailAdress:this.detailAdress,
            adressFloor:this.adressFloor
        });
    }
    //地区选择
    GetCityData() {
        this.CityData.getCitiesData()
            .then(data => {
                this.cityData = data;
            });
    }
    dismiss(){
        this.ViewCtrl.dismiss();
    }
}
