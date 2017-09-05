import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { DealsPage } from '../pages/deals/deals';
import { ProfilePage } from '../pages/profile/profile';
import { TrackedPage } from '../pages/tracked/tracked';
import { SettingsPage } from '../pages/settings/settings';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { DetailsPage } from '../pages/details/details';
import { TabsPage } from '../pages/tabs/tabs';

import { AuthService } from './services/auth.service';
import { ValidateService } from './services/validate.service';
import { ItemService } from './services/item.service';
import { ToastService } from './services/toast.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    DealsPage,
    ProfilePage,
    TrackedPage,
    SettingsPage,
    LoginPage,
    RegisterPage,
    DetailsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DealsPage,
    ProfilePage,
    TrackedPage,
    SettingsPage,
    LoginPage,
    RegisterPage,
    DetailsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    ValidateService,
    ItemService,
    ToastService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
