import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LoginPage } from './login/login';
import { RegisterPage } from "./register/register";


@NgModule({
    imports:[
        IonicModule
    ],
    providers:[

    ],
    declarations:[
        LoginPage,
        RegisterPage
    ],
    entryComponents:[
        LoginPage,
        RegisterPage
    ],
    exports:[
        IonicModule
    ]
})
export class UserInfoModule{}