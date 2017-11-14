import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  list:any = [
    {
      "img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506502966201&di=03bbb3883ef47c52cdea1d91d0e0887f&imgtype=0&src=http%3A%2F%2Fs11.sinaimg.cn%2Fmiddle%2F6f150e41gbbba101c52ea%26690",
      "title":"咖啡",
      "describe":"爱心爱心爱心爱心爱心爱心爱心"
    },
    {
      "img":"http://imagecdn.lecake.com/postsystem/docroot/images/goods/009996EA469726D3185B2DF6D760483B.jpg",
      "title":"早餐",
      "describe":"爱心爱心爱心爱心爱心爱心爱心"
    },
    {
      "img":"http://www.losabife.com/jm/images/dessert/d_r6_c2.jpg",
      "title":"小点心",
      "describe":"爱心爱心爱心爱心爱心爱心爱心"
    },
    {
      "img":"http://dangao05.com/images/201509/goods_img/347_P_1443390803786.jpg",
      "title":"意大利面",
      "describe":"爱心爱心爱心爱心爱心爱心爱心"
    },
    {
      "img":"http://www.losabife.com/jm/images/dessert/d_r7_c2.jpg",
      "title":"拿铁",
      "describe":"爱心爱心爱心爱心爱心爱心爱心"
    },
    {
      "img":"http://static.21cake.com//upload/images/c864cfbcfcddd0c8964798f51c4ad8f2.jpg",
      "title":"冰淇淋",
      "describe":"爱心爱心爱心爱心爱心爱心爱心"
    },
  ]
  constructor(public navCtrl: NavController) {
      
      
  }

}
