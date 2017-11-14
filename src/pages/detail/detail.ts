import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { GoshopPage } from './goshop/goshop';
import { ShopCarPage } from '../shopcar/shopcar';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the MinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
    selector: 'page-detail',
    templateUrl: 'detail.html',
})
export class DetailPage {
    @ViewChild(Slides) slides: Slides
    rate: any;
    num: number = 0;
    pet: string = "2-4"
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private callNumber: CallNumber
    ) {
        this.rate = this.navParams.get('rate')
        console.log(this.rate);
    }

    // slideAutoplay() {
    //     this.slides.startAutoplay();
    // }[]
    GoshopCar() {
        setTimeout(() => {
            this.navCtrl.parent.select(3)
            this.navCtrl.popToRoot()
        }, 500)
    }
    AddShopCar() {
        this.num++;
    }
    Goshop() {
        this.navCtrl.push(GoshopPage)
    }
    Call() {
        this.callNumber.callNumber("18437931030", true)
            .then(() => console.log('Launched dialer!'))
            .catch(() => console.log('Error launching dialer'));
    }
}
