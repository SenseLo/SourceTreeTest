import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController } from 'ionic-angular';

import { Transfer, TransferObject } from '@ionic-native/transfer';
import { LoginPage } from '../userInfo/login/login';
import { RegisterPage } from '../userInfo/register/register';
import { MapPage } from "./map/map";
import { Camera } from '@ionic-native/camera';
import { AbouttPage } from './about/about';



/**
 * Generated class for the MinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class MinePage {
  userIcon: any;
  fileTransfer: TransferObject;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionCtrl: ActionSheetController,
    public toastCtrl: ToastController,
    public transfer: Transfer,
    public camera: Camera
  ) {
    this.fileTransfer = this.transfer.create();
  }

  goLogin() {
    this.navCtrl.push(LoginPage)
  }
  goRegister() {
    this.navCtrl.push(RegisterPage)
  }
  map() {
    this.navCtrl.push(MapPage)
  }
  about(){
    this.navCtrl.push(AbouttPage)
  }
  openCamer() {
    let action = this.actionCtrl.create({
      buttons: [
        {
          text: '拍照',
          handler: () => {
            this.seleImgType(1);
          }
        },
        {
          text: '从手机相册选择',
          handler: () => {
            this.seleImgType(0);
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    })
    action.present();
  }
  //提示框
  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 1000,
      position: 'middle'
    })
    toast.present();
  }
  //上传头像
  async upload(): Promise<void> {
    let link = '192.198.160';
    try {
      if (!this.userIcon) return this.presentToast("请选择图片");
      await this.fileTransfer.upload(this.userIcon, link, {
        fileKey: 'avatar',
      });
      this.presentToast("上传成功");
    } catch (err) {
      console.error(err);
      this.presentToast("上传失败");
    }
  }
  //相册图片s
  async seleImgType(type: number): Promise<any> {
    try {
      this.userIcon = await this.camera.getPicture({
        quality: 90,
        allowEdit: true,
        sourceType: type,
        correctOrientation: true,
        targetHeight: 100,
        targetWidth: 100
      });
      return this.upload();
    } catch (err) {

    }
  }
}
