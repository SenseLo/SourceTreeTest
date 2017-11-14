import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { NativeService } from '../../../provider/NativeService';
declare var AMap;
@Component({
    selector: 'page-navigation',
    templateUrl: 'navigation.html'
})
export class NavigationPage {
    @ViewChild('panel') panel: ElementRef;
    navigationType: number;
    navigationIsReady: boolean = false;
    map;
    startPoint;
    endPoint;
    constructor(
        public navCtrl: NavController,
        public ViewCtrl: ViewController,
        public NativeService: NativeService,
        public Params: NavParams
    ) {
        this.navigationType = this.Params.get("navigationType");
        this.endPoint = this.Params.get("markerLocation");
        this.map = window['HomeAMap'];
    }

    dismiss() {
        this.ViewCtrl.dismiss();
    }

    ngAfterContentInit() {
        let type = this.navigationType, options = { city: '上海市', panel: this.panel.nativeElement, map: this.map };
        if (type === 1) {
            AMap.service('AMap.Driving', () => {
                this.navigationIsReady = true;
                this.doSearch(type, new AMap.Driving(options));
            });
        } else if (type === 2) {
            AMap.service('AMap.Transfer', () => {
                this.doSearch(type, new AMap.Transfer(options));
            });
        } else if (type === 3) {
            AMap.service('AMap.Walking', () => {
                this.doSearch(type, new AMap.Walking(options));
            });
        }
    }
    doSearch(navigationType, navigationService) {
        this.NativeService.getUserLocation().subscribe(location => {
            this.map.clearMap();
            this.startPoint = location;
            navigationService.search([this.startPoint.lng, this.startPoint.lat], [this.endPoint.lng, this.endPoint.lat], (status, result) => {

            });
        });
    }
    doNavigation(type) {// 0实时导航,1模拟导航
        this.NativeService.navigation(this.startPoint, this.endPoint, type).subscribe(message => {
            debugger;
        });
    }

}
