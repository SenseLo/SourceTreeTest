import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { DetailPage } from './detail';
import { GoshopPage } from "./goshop/goshop";
import { CreatLocationPage } from "./creatlocation/creatlocation";
import { ChoselocationPage } from './choselocation/choselocation';
import { CityPickerModule } from  "ionic2-city-picker"

@NgModule({
    declarations: [
        DetailPage,
        GoshopPage,
        ChoselocationPage,
        CreatLocationPage
    ],
    imports: [
        IonicModule,
        CityPickerModule
    ],
    entryComponents: [
        DetailPage,
        GoshopPage,
        ChoselocationPage,
        CreatLocationPage
    ],
    exports: [
        IonicModule,
    ]
})
export class DetailPageModule { }
