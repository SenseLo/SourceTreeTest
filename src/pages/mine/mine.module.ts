import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MinePage } from './mine';
import { MapPage } from "./map/map";
import { SearchAdressPage } from './search-adress/search-adress';
import { NavigationPage } from "./navigation/navigation";
import { AbouttPage } from "./about/about";

@NgModule({
    declarations: [
        MinePage,
        MapPage,
        SearchAdressPage,
        NavigationPage,
        AbouttPage
    ],
    imports: [
        IonicModule
    ],
    entryComponents: [
        MinePage,
        MapPage,
        SearchAdressPage,
        NavigationPage,
        AbouttPage
    ],
    exports: [
        IonicModule
    ]
})
export class MinePageModule { }
