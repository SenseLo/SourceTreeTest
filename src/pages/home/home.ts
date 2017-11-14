import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { DetailPage } from '../detail/detail';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides
  slider: any = [
    {
      "img": "http://imagecdn.lecake.com/postsystem/docroot/images/promotion/201705/9380A2CA5A70A089BA0D80148D0DF299.jpg",
      "src": "",
      "title": "雪域牛乳芝士蛋糕",
      "english": 'Le Cheesecake',
      "price": 100
    },
    {
      "img": "http://www.lecake.com/postsystem/docroot/images/app/BAB99AD02DB9D5696CDE203004EDEA36.jpg",
      "src": "",
      "title": "雪域牛乳芝士蛋糕",
      "english": 'Le Cheesecake',
      "price": 100
    },
    {
      "img": "http://imagecdn.lecake.com/postsystem/docroot/images/promotion/201709/DF7C820DF3BCB7F828FDAA4A92FC7618.jpg",
      "src": "",
      "title": "雪域牛乳芝士蛋糕",
      "english": 'Le Cheesecake',
      "price": 100
    },
    {
      "img": "http://imagecdn.lecake.com/postsystem/docroot/images/promotion/201704/BFA6C33967B35EB05448F066D7C893CD.jpg",
      "src": "",
      "title": "雪域牛乳芝士蛋糕",
      "english": 'Le Cheesecake',
      "price": 100
    },
    {
      "img": "http://imagecdn.lecake.com/postsystem/docroot/images/promotion/201705/B735F1249321B77523712E0BD0D0C5AF.jpg",
      "src": "",
      "title": "雪域牛乳芝士蛋糕",
      "english": 'Le Cheesecake',
      "price": 100
    },
  ]
  list: any = [
    {
      "img": "http://imagecdn.lecake.com/postsystem/docroot/images/goods/201212/10800/list_10800.jpg",
      "title": "雪域牛乳芝士蛋糕",
      "english": 'Le Cheesecake',
      "price": 100
    },
    {
      "img": "http://imagecdn.lecake.com/postsystem/docroot/images/goods/201709/15663/list_15663.jpg",
      "title": "雪域牛乳芝士蛋糕",
      "english": 'Le Cheesecake',
      "price": 100
    },
    {
      "img": "http://imagecdn.lecake.com/postsystem/docroot/images/goods/201709/15657/list_15657.jpg",
      "title": "雪域牛乳芝士蛋糕",
      "english": 'Le Cheesecake',
      "price": 100
    },
    {
      "img": "http://imagecdn.lecake.com/postsystem/docroot/images/goods/201706/15474/list_15474.jpg",
      "title": "雪域牛乳芝士蛋糕",
      "english": 'Le Cheesecake',
      "price": 100
    },
    {
      "img": "http://imagecdn.lecake.com/postsystem/docroot/images/goods/201706/15374/list_15374.jpg",
      "title": "雪域牛乳芝士蛋糕",
      "english": 'Le Cheesecake',
      "price": 100
    },
    {
      "img": "http://imagecdn.lecake.com/postsystem/docroot/images/goods/201709/15613/list_15613.jpg",
      "title": "雪域牛乳芝士蛋糕",
      "english": 'Le Cheesecake',
      "price": 100
    },
  ]
  constructor(public navCtrl: NavController) {

  }
  ionViewDidEnter() {
    // let _body = document.getElementsByTagName('body');
    // let _bodyWith = _body[0].clientWidth;
    // let right_box = document.getElementsByClassName('right');
    // let right_box_c = right_box['0'];
    // right_box_c.style.width = (_bodyWith - 80)/100% + "px";

    // let a = document.querySelector('body');
    // console.log(a);
    // let b = document.querySelectorAll('div')
    //  console.log(b);

  }

  //页面跳转停止轮播
  ngOnInit() {
    if (this.slider.length > 0) {
      this.slides.startAutoplay();
    }
  }
  ionViewWillLeave() {
    this.slides.stopAutoplay();
  }
  //手动轮播
  slideAutoplay() {
    this.slides.startAutoplay();
  }
  openDetail(i, slider) {
    this.navCtrl.push(DetailPage, {
      rate: slider[i]
    })
  }
  openDetai(i, list) {
    this.navCtrl.push(DetailPage, {
      rate: list[i]
    })
  }

}
