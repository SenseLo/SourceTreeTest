import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';
import { ActionSheetController } from 'ionic-angular';
import { NativeService } from '../../../provider/NativeService';


@Component({
    selector: 'page-aboutt',
    templateUrl: 'about.html'
})

export class AbouttPage {
    shareUrl: 'http://www.baidu.com'
    shareTitle: '百度'
    shareDesc: '123456'
    shareImg: ''
    constructor(
        public callNmuber: CallNumber,
        private Action: ActionSheetController,
        private NativeService: NativeService
    ) {

    }
    call() {
        this.callNmuber.callNumber('40017016200', true)
    }
    shareApp() {
        let share = this.Action.create({
            title: '分享至',
            cssClass: 'headChoice',
            buttons: [
                {
                    text: 'QQ分享',
                    role: 'destructive',
                    icon: 'qq',
                    handler: () => {
                        let qq = (<any>window).QQSDK;
                        let that = this;
                        qq.checkClientInstalled(function () {
                            var args: any = {

                            };
                            args.scene = qq.Scene.QQ;//QQSDK.Scene.QQZone,QQSDK.Scene.Favorite
                            args.url = that.shareUrl;
                            args.title = that.shareTitle;
                            args.description = that.shareDesc;
                            args.image = that.shareImg;
                            qq.shareNews(function () {
                                alert('成功')
                            }, function (failReason) {
                                // alert(failReason);
                            }, args);
                        }, function () {
                            // if installed QQ Client version is not supported sso,also will get this error
                            this.toastService.show('您没有安装QQ！');
                        });
                    }
                },
                {
                    text: '微信分享',
                    role: 'destructive',
                    icon: 'weixincircle',
                    handler: () => {
                        console.log('Destructive clicked');
                    }
                },
                {
                    text: '微博分享',
                    role: 'destructive',
                    icon: 'weibo',
                    handler: () => {
                        console.log('Destructive clicked');
                    }
                },
            ]
        })
        share.present()
    }

    aa() {
        let qq = (<any>window).QQSDK;
        let that = this;
        qq.checkClientInstalled(function () {
            var args: any = {

};
            args.scene = qq.Scene.QQ;//QQSDK.Scene.QQZone,QQSDK.Scene.Favorite
            args.url = that.shareUrl;
            args.title = that.shareTitle;
            args.description = that.shareDesc;
            args.image = that.shareImg;
            qq.shareNews(function () {
                alert('成功')
            }, function (failReason) {
                // alert(failReason);
            }, args);
        }, function () {
            // if installed QQ Client version is not supported sso,also will get this error
            this.toastService.show('您没有安装QQ！');
        });
    }
}