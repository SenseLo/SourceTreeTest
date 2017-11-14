import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NativeService } from '../../provider/NativeService';
import { CallNumber } from '@ionic-native/call-number';
import { BarcodeScanner, BarcodeScannerOptions } from "@ionic-native/barcode-scanner";

declare var LocationPlugin;

/**
 * Generated class for the MinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-shopcar',
  templateUrl: 'shopcar.html',
})
export class ShopCarPage {
  scannedText: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private NativeService: NativeService,
    public callNumber: CallNumber,
    private barcodeScanner: BarcodeScanner,
    private Alert: AlertController

  ) {
  }

  getUserLocation() {
    this.NativeService.getUserLocation().subscribe(res => {
      alert(res.lng + ',' + res.lat);
    }, err => {
      console.log(err);
      alert(err);
    })
  }
  click() {
    LocationPlugin.getLocation(data => {
      alert(JSON.stringify(data))
    }, msg => {
      alert(JSON.stringify(msg))
    });
  }
  call() {
    let options: BarcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true,
    };
    this.barcodeScanner.scan(options).then((barcodeData) => {
      if (barcodeData.cancelled) {
        this.NativeService.showToast("取消操作")
        return false;
      }
      this.scannedText = JSON.stringify(barcodeData);
      let Alert = this.Alert.create({
        title: '信息',
        subTitle: '请查看',
        message: this.scannedText,
        buttons: [
          {
            text: '确定',
            role: 'cancel',
            handler: () => {
              window.location.href = "http://www.baidu.com"
            }
          },
          {
            text: 'Buy',
            handler: () => {
              
            }
          }
        ]
      })
      Alert.present();
      //cancelled text format
    }, (err) => {
      alert('扫码失败')
    });
  }


}
