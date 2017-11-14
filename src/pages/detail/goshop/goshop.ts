import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ChoselocationPage } from '../choselocation/choselocation';



/**
 * Generated class for the MinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
    selector: 'page-goshop',
    templateUrl: 'goshop.html',
})
export class GoshopPage {
    displayFormat: any;
    detail:any =[{

    }];
    constructor(
        public NavCtrl: NavController,
        public ModalCtrl: ModalController
    ) {
        this.displayFormat = new Date().toISOString();
    }
    goJs() {
        // this.NavCtrl.parent.select(3)
        // this.NavCtrl.popToRoot()
    }
    goLocation() {
        let modal = this.ModalCtrl.create(ChoselocationPage)
        modal.onDidDismiss(data=>{
            if(data){
                this.detail.push(data)
            }
        })
        modal.present();
        console.log(this.detail);
        
    }
}
