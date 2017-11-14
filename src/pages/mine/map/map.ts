import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { NavController, NavParams, ModalController, } from 'ionic-angular';
import { SearchAdressPage } from '../search-adress/search-adress';
import { NativeService } from '../../../provider/NativeService';
import { NavigationPage } from '../navigation/navigation';


declare var AMap;


/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  @ViewChild('map_container') map_container: ElementRef;
  map: any;//地图对象
  mapIsComplete: boolean = false;//地图是否加载完成
  isPositioning: boolean = false;//是否正在定位
  marker: any;//标注
  showIonFab: boolean = false;//是否显示导航按钮
  @Input()
  params = {
    draggable: true,//标注是否可以拖拽;
    click: false,//地图是否点击改变标注的位置
    searchBar: true,//是否显示搜索框
    navigation: true,
    address: '',//主页面传过来的地址
    position: {
      lng: '',
      lat: ''
    },//主页面传过来的坐标
    lnglatXY: {}
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ModalCtrl: ModalController,
    public nativeService: NativeService,
  ) { }

  ngAfterContentInit() {
    this.loadMap();
    setTimeout(() => {
      if (!this.map) {
        this.loadMap();
      }
    }, 3000);
  }

  //点击搜索
  locationSearch() {
    let that = this;
    let modal = that.ModalCtrl.create(SearchAdressPage, { address: that.params.address })
    modal.present();
    modal.onDidDismiss(item => {
      if (item) {
        this.drawMarker(item.location, item.name);
      }
    })
  }

  //加载地图
  private loadMap() {
    let that = this;
    try {
      that.map = new AMap.Map('map-share', {
        view: new AMap.View2D({//创建地图二维视口
          zoom: 14, //设置地图缩放级别
          rotateEnable: true,
          showBuildingBlock: true,
          baseRender: 'd'
        })
      });
      //添加比例
      that.map.on('complete', function () {
        that.mapIsComplete = true;
        AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {//添加工具条和比例尺
          that.map.addControl(new AMap.ToolBar());
        });
        if (that.params.position && that.params.position.lat && that.params.position.lng) { //判断主页面传过来的是坐标就直接描点标注
          that.drawMarker(that.params.position);
        } else if (!(that.params.position.lat && that.params.position.lng) && that.params.address) {
          //判断主页面传过来的是地址就跳转到地址搜索地址页面,返回确定的地址
          that.locationSearch();
        } else {
          //主页面不传address和position就直接定位到当前位置
          that.mapLocation();
        }

        //判断是否可以点击地图改变标注位置
        if (that.params.click) {
          that.map.on('click', function (e) {
            let position = {
              lng: e.lnglat.getLng(),
              lat: e.lnglat.getLat()
            };
            that.drawMarker(position);
          });
        }

      });
      window['HomeAMap'] = this.map;
    } catch (err) {
      that.mapIsComplete = false;
      that.nativeService.showToast('地图加载失败,请检查网络或稍后再试.')
    }
  }

  //定位当前地址
  mapLocation() {
    let that = this;
    that.isPositioning = true;
    that.nativeService.getUserLocation().subscribe(position => {
      that.drawMarker(position);
      that.isPositioning = false;
    }, () => {
      that.isPositioning = false;
    });
  }
  //描点标注
  private drawMarker(position, addressName: string = '') {
    let that = this;
    that.params.lnglatXY = new AMap.LngLat(position.lng, position.lat);
    that.map.clearMap();

    //配置需要显示搜索框就根据传进来的position参数给搜索框赋值
    if (that.params.searchBar) {
      if (addressName) {
        that.params.address = addressName;
      } else {
        that.geocoder(that.params.lnglatXY);
      }
    }


    that.marker = new AMap.Marker({
      map: that.map,
      draggable: that.params.draggable,//控制标注是否可以拖拽
      position: that.params.lnglatXY,
    });

    //配置需要搜索框才执行
    if (that.params.navigation) {
      if (that.marker) {
        that.showIonFab = true;
      }
    }

    //拖拽标注
    that.marker.on('dragend', function (e) {
      let position = {
        lng: e.lnglat.getLng(),
        lat: e.lnglat.getLat()
      };
      that.drawMarker(position);
    });
    that.map.setFitView();
  }

  //根据经纬坐标获取对应的地址
  geocoder(position) {
    let that = this;
    //   let geocoder;
    // AMap.plugin('AMap.Geocoder', function () {
    //   geocoder = new AMap.Geocoder({
    //     radius: 1000,
    //     extensions: "all"
    //   });

    // })
    let geocoder = new AMap.Geocoder({
      radius: 1000,
      extensions: "all"
    })
    geocoder.getAddress(position, function (status, result) {
      if (status === 'complete' && result.info === 'OK') {
        //获得了有效的地址信息:
        let addressComponent = result.regeocode.addressComponent;
        that.params.address = addressComponent.district + addressComponent.township + addressComponent.street + addressComponent.streetNumber;
        console.log(that.params.address);
        console.log(addressComponent);

      } else {
        that.params.address = '';
      }
    });
  }

  //导航函数
  mapNavigation(navigationType) {//1驾车,2公交,3步行
    let markerPosition = this.marker.getPosition();
    if (!markerPosition) {
      this.nativeService.showToast('请先搜索要去的地点');
      return;
    }
    let modal = this.ModalCtrl.create(NavigationPage, {
      'navigationType': navigationType,
      'markerLocation': { 'lng': markerPosition.lng, 'lat': markerPosition.lat }
    });
    modal.present();
  }
}