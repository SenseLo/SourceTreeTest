import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { CreatLocationPage } from '../creatlocation/creatlocation';


/**
 * Generated class for the MinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
    selector: 'page-choselocation',
    templateUrl: 'choselocation.html',
})
export class ChoselocationPage {
    displayFormat: any;
    userName
    userPhone
    cityName
    detailAdress
    adressFloor
    Location = [
        {
            "userName": "李天阳",
            "userPhone": "18437931030",
            "cityName": "上海市-上海市-浦东新区",
            "detailAdress": "张江高科2206弄",
            "adressFloor": "35号楼902室",
            "checked": false
        },
    ]
    constructor(
        public NavCtrl: NavController,
        public ViewCtrl: ViewController,
        public ModalCtrl: ModalController,
    ) {
        this.displayFormat = new Date().toISOString();
    }
    goJs() {
        // this.NavCtrl.parent.select(3)
        // this.NavCtrl.popToRoot()
    }
    dismiss() {
        this.ViewCtrl.dismiss(data => {
        });
    }
    popTo(addr) {
        this.ViewCtrl.dismiss({
            userName: addr.userName,
            userPhone: addr.userPhone,
            cityName: addr.cityName,
            detailAdress: addr.detailAdress,
            adressFloor: addr.adressFloor
        });
      
    }
    Address() {
        let modal = this.ModalCtrl.create(CreatLocationPage)
        modal.onDidDismiss(data => {
            console.log(data);

            this.Location.push(data);
        })
        modal.present();
    }
}
