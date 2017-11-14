import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  list:any = [
    {
      "price":"15.0",
      "color":"#FFE4B5",
      "month":"9",
      "describe":"雪域牛乳芝士蛋糕 ",
      "title":"帕尼肥点心",
      "description":"Le Cheesecake ",
      "img":"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201212/10800/display_10800_50122.jpg",
    },
    {
      "price":"15.0",
      "color":"#FFDEAD",
      "month":"10",
      "describe":"Le Cheesecake",
      "title":"雪域牛乳芝士蛋糕 ",
      "description":"Le Cheesecake ",
      "img":"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201709/15663/display_15663_27734.jpg",
    },
    {
      "price":"15.0",
      "color":"#FFDAB9",
      "month":"10",
      "describe":"雪域牛乳芝士蛋糕 ",
      "title":"帕尼肥点心",
      "description":"Le Cheesecake ",
      "img":"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201212/10800/display_10800_50122.jpg",
    },
    {
      "price":"15.0",
      "color":"#FFE4C4",
      "month":"10",
      "describe":"雪域牛乳芝士蛋糕 ",
      "title":"雪域牛乳芝士蛋糕 ",
      "description":"Le Cheesecake",
      "img":"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201212/10800/display_10800_50122.jpg",
    },
    {
      "price":"15.0",
      "color":"#FFEBCD",
      "month":"10",
      "describe":"雪域牛乳芝士蛋糕 ",
      "title":"雪域牛乳芝士蛋糕 ",
      "description":"Le Cheesecake",
      "img":"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201212/10800/display_10800_50122.jpg",
    },
  ]
  constructor(public navCtrl: NavController) {

  }

}
