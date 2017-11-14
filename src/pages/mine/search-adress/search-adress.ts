import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController, Searchbar } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Subject } from "rxjs";
import { NativeService } from '../../../provider/NativeService';

declare var AMap;


@Component({
    selector: 'page-search-adress',
    templateUrl: 'search-adress.html',
})
export class SearchAdressPage {
    placeSearch: any;
    @ViewChild('searchBar') searchBar: Searchbar;
    address: any = '';
    items: any[] = [];
    searchTextStream: Subject<string> = new Subject<string>();
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public ViewCtrl: ViewController,
        public storage: Storage,
        public NativeService: NativeService
    ) {
        this.address = this.navParams.get('address');
        AMap.service('AMap.PlaceSearch', () => {//地点查询插件
            this.placeSearch = new AMap.PlaceSearch({
                pageSize: 10,
                pageIndex: 1,
                city: '上海市'
            });
        });
        this.storage.get('MapSearchHistory').then(items => {
            this.items = (items || []).reverse();
        });
    }
    dismiss() {
        this.ViewCtrl.dismiss();
    }
    ionViewDidEnter() {
        setTimeout(() => {
            this.searchBar.setFocus();
        });
    }
    ngAfterContentInit() {
        this.searchTextStream
            .debounceTime(600)
            .distinctUntilChanged()
            .subscribe(value => {
                this.getSearchData(value).then(list => this.items = <[any]>list);
            });
        this.searchTextStream.next(this.address);
    }
    getItems($event) {
        this.searchTextStream.next($event.target.value);
    }
    selectItem(item) {
        this.storage.get('MapSearchHistory').then(items => {
            if (items) {
                let isExist = false;
                for (let value of items) {
                    if (value.id === item.id) {
                        isExist = true;
                    }
                }
                if (!isExist) {
                    items.push(item);
                }
            } else {
                items = [item]
            }
            this.storage.set('MapSearchHistory', items);
        });
        this.ViewCtrl.dismiss(item);
    }
    clearHistory() {
        this.storage.remove('MapSearchHistory');
        this.items = [];
    }
    private getSearchData(val) {
        return new Promise((resolve) => {
            if (val && val.trim() != '') {
                this.placeSearch.search(val, (status, result) => {
                    if (status == 'complete') {
                        resolve(result.poiList.pois);
                    } else if (status == 'no_data') {
                        this.NativeService.showToast('没有找到匹配结果,请精确查询条件')
                    } else {
                        this.NativeService.showToast('地图查询失败,稍后再试.')
                    }
                });
            }
        });
    }
}
