webpackJsonp([0],{

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deals_deals__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tracked_tracked__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(383);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__tracked_tracked__["a" /* TrackedPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__deals_deals__["a" /* DealsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\dgalp\ionic-projects\amazontracker\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Tracked" tabIcon="magnet"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Top Deals" tabIcon="cash"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Profile" tabIcon="person"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Settings" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\dgalp\ionic-projects\amazontracker\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_register_register__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_toast_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_services_validate_service__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = (function () {
    function LoginPage(navCtrl, authService, validateService, toastService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.validateService = validateService;
        this.toastService = toastService;
        this.loading = false;
    }
    LoginPage.prototype.onLoginSubmit = function () {
        var _this = this;
        this.loading = true;
        var user = {
            username: this.username,
            password: this.password
        };
        if (!this.validateService.validateLogin(user)) {
            this.loading = false;
            this.toastService.presentToast('Please enter a username and password', 'bottom');
            return;
        }
        this.authService.authenticateUser(user).subscribe(function (data) {
            _this.loading = false;
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                _this.toastService.presentToast('Invalid username or password', 'bottom');
            }
        });
    };
    LoginPage.prototype.register = function () {
        //this.navCtrl.setRoot(RegisterPage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_register_register__["a" /* RegisterPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login',template:/*ion-inline-start:"C:\Users\dgalp\ionic-projects\amazontracker\src\pages\login\login.html"*/'<ion-content padding>\n  <div class="logo-container">\n    <!--<img src="http://placehold.it/300x200"/>-->\n    <span class="login-title">Amazon<br/> Deal <br/>Tracker</span>\n  </div>\n  <div class="login-container">\n    <ion-list>\n\n      <ion-item>\n        <ion-input [(ngModel)]="username" name="username" type="text" placeholder="Username"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input [(ngModel)]="password" name="password" type="password" placeholder="Password"></ion-input>\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button block (click)="onLoginSubmit()">Login</button>\n    <button ion-button class="register-btn" block clear (click)="register()">Create New Account</button>\n  </div>\n  <ion-spinner *ngIf="loading"></ion-spinner>\n</ion-content>\n'/*ion-inline-end:"C:\Users\dgalp\ionic-projects\amazontracker\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__app_services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_6__app_services_validate_service__["a" /* ValidateService */],
        __WEBPACK_IMPORTED_MODULE_5__app_services_toast_service__["a" /* ToastService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateLogin = function (user) {
        if (user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validatePassword = function (password, verifyPassword) {
        if (password == verifyPassword) {
            return true;
        }
        else {
            return false;
        }
    };
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_item_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_toast_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_details__ = __webpack_require__(264);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TrackedPage = (function () {
    function TrackedPage(navCtrl, alertCtrl, itemService, authService, toastService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.itemService = itemService;
        this.authService = authService;
        this.toastService = toastService;
        this.loading = false;
        this.refreshing = false;
        this.items = [];
    }
    TrackedPage.prototype.ngOnInit = function () {
        this.loadProfile();
    };
    TrackedPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.refreshing = true;
        this.items = [];
        this.loadProfile();
        setTimeout(function () {
            _this.refreshing = false;
            refresher.complete();
        }, 1500);
    };
    TrackedPage.prototype.loadProfile = function () {
        var _this = this;
        var user = JSON.parse(localStorage.getItem('user'));
        this.authService.getProfile(user.id || user._id).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(null, data.user);
                _this.getItemData(user.trackedItems);
            }
            else {
                //do something if can't get user profile
            }
        });
    };
    TrackedPage.prototype.getItemData = function (items) {
        var _this = this;
        for (var i = 0; i < items.length; i++) {
            this.itemService.getItemByAsin(items[i])
                .subscribe(function (data) {
                _this.items.push(data.itemData);
            });
        }
    };
    TrackedPage.prototype.presentTrackPrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Track a new item',
            inputs: [
                {
                    name: 'url',
                    placeholder: 'Paste Amazon product link'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Start Tracking',
                    handler: function (data) {
                        var asin = _this.itemService.isolateAsin(data.url);
                        if (!asin)
                            return _this.toastService.presentToast('Invalid URL', 'top');
                        _this.loading = true;
                        _this.itemService.addToTracker(asin).subscribe(function (response) {
                            if (response.item) {
                                _this.items.push(response.item);
                                var user = JSON.parse(localStorage.getItem('user'));
                                user.trackedItems.push(response.item.asin);
                                _this.authService.storeUserData(null, user);
                            }
                            _this.toastService.presentToast(response.msg, 'top');
                            _this.loading = false;
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    TrackedPage.prototype.viewDetails = function (item) {
        this.loading = true;
        //this.items.splice(this.items.indexOf(item.asin), 1);
        //this.getItemData([item.asin]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__details_details__["a" /* DetailsPage */], {
            item: item
        });
        this.loading = false;
    };
    return TrackedPage;
}());
TrackedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tracked',template:/*ion-inline-start:"C:\Users\dgalp\ionic-projects\amazontracker\src\pages\tracked\tracked.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Tracked Items</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n  <ion-item *ngFor="let item of items">\n    <ion-thumbnail item-start>\n      <img src={{item.images.thumbnailURL}} />\n    </ion-thumbnail>\n    <h2>{{item.title}}</h2>\n    <p>${{(item.salePrice.price/100).toFixed(2)}}</p>\n    <button ion-button clear item-end (click)="viewDetails(item)">Details</button>\n  </ion-item>\n</ion-list>\n<div class="none-tracked" *ngIf="items.length == 0 && refreshing == false">\n  <span class="none-tracked-text">Tap "+" to track an item</span>\n</div>\n<ion-fab right bottom>\n   <button ion-fab color="secondary" (click)="presentTrackPrompt()"><ion-icon name="add"></ion-icon></button>\n </ion-fab>\n</ion-content>\n<ion-spinner *ngIf="loading"></ion-spinner>\n'/*ion-inline-end:"C:\Users\dgalp\ionic-projects\amazontracker\src\pages\tracked\tracked.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__app_services_item_service__["a" /* ItemService */],
        __WEBPACK_IMPORTED_MODULE_3__app_services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_4__app_services_toast_service__["a" /* ToastService */]])
], TrackedPage);

//# sourceMappingURL=tracked.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemService = (function () {
    function ItemService(http, authService) {
        this.authService = authService;
        this.http = http;
        //this.baseUrl = 'http://localhost:3000';
        this.baseUrl = 'http://10.0.2.2:3000';
    }
    ItemService.prototype.isolateAsin = function (url) {
        var regex = RegExp("(\/[A-Z0-9]{10}\/)");
        var m = url.match(regex);
        if (m)
            return m[0].replace(/\//g, '');
        return false;
    };
    ItemService.prototype.addToTracker = function (asin) {
        var user = JSON.parse(localStorage.getItem('user'));
        var data = {
            asin: asin,
            userId: user.id || user._id
        };
        var headers = new Headers();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + '/items/new', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ItemService.prototype.removeItem = function (asin) {
        var user = JSON.parse(localStorage.getItem('user'));
        var data = {
            asin: asin,
            userId: user.id || user._id
        };
        var headers = new Headers();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + '/items/remove', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ItemService.prototype.getItemByAsin = function (asin) {
        var headers = new Headers();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + '/items/get', { asin: asin }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return ItemService;
}());
ItemService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]])
], ItemService);

//# sourceMappingURL=item.service.js.map

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 146;

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 189;

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DealsPage = (function () {
    function DealsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return DealsPage;
}());
DealsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'deals',template:/*ion-inline-start:"C:\Users\dgalp\ionic-projects\amazontracker\src\pages\deals\deals.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Top Deals\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n  <ion-card-header>\n    There are currently no top deals :(\n  </ion-card-header>\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\dgalp\ionic-projects\amazontracker\src\pages\deals\deals.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], DealsPage);

//# sourceMappingURL=deals.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfilePage = (function () {
    function ProfilePage(navCtrl, app, alertCtrl, authService) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
    }
    ProfilePage.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    ProfilePage.prototype.logout = function () {
        this.authService.logout();
        this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    ProfilePage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Logout?',
            message: 'Are you sure you want to logout?',
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Logout',
                    handler: function () {
                        _this.logout();
                    }
                }
            ]
        });
        confirm.present();
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'profile',template:/*ion-inline-start:"C:\Users\dgalp\ionic-projects\amazontracker\src\pages\profile\profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      {{user.name}}\'s\' Profile\n    </ion-card-header>\n\n    <ion-list>\n      <button ion-item>\n        <ion-icon name="person" item-start></ion-icon>\n        {{user.username}}\n      </button>\n\n      <button ion-item>\n        <ion-icon name="mail" item-start></ion-icon>\n        {{user.email}}\n      </button>\n\n      <button ion-item>\n        <ion-icon name="lock" item-start></ion-icon>\n        Change password\n      </button>\n\n      <button ion-item (click)="showConfirm()">\n        Logout\n      </button>\n\n    </ion-list>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\dgalp\ionic-projects\amazontracker\src\pages\profile\profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__app_services_auth_service__["a" /* AuthService */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_validate_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_toast_service__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPage = (function () {
    function RegisterPage(validateService, authService, toastService, navCtrl) {
        this.validateService = validateService;
        this.authService = authService;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
        this.loading = false;
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        //Required fields
        if (!this.validateService.validateRegister(user)) {
            this.toastService.presentToast('Please fill in all fields.', 'top');
            return false;
        }
        //Validate email
        if (!this.validateService.validateEmail(user.email)) {
            this.toastService.presentToast('Please enter a valid email address.', 'top');
            return false;
        }
        if (!this.validateService.validatePassword(user.password, this.verifyPassword)) {
            this.toastService.presentToast('Passwords do not match.', 'top');
            return false;
        }
        //Register User
        this.loading = true;
        this.authService.registerUser(user).subscribe(function (data) {
            _this.loading = false;
            if (data.success) { }
            {
                _this.navCtrl.pop();
            }
            _this.toastService.presentToast(data.msg, 'top');
        });
    };
    RegisterPage.prototype.onCancel = function () {
        this.navCtrl.pop();
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'register',template:/*ion-inline-start:"C:\Users\dgalp\ionic-projects\amazontracker\src\pages\register\register.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      New Account\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list>\n\n\n    <ion-item>\n      <ion-input [(ngModel)]="name" name="name" type="text" placeholder="Name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input [(ngModel)]="email" name="email" type="text" placeholder="Email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input [(ngModel)]="username" name="username" type="text" placeholder="Username"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input [(ngModel)]="password" name="password" type="password" placeholder="Password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input [(ngModel)]="verifyPassword" name="verifyPassword" type="password" placeholder="Verify password"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button block color="secondary" (click)="onRegisterSubmit()">Register</button>\n  <button ion-button block color="danger" (click)="onCancel()">Cancel</button>\n</ion-content>\n<ion-spinner *ngIf="loading"></ion-spinner>\n'/*ion-inline-end:"C:\Users\dgalp\ionic-projects\amazontracker\src\pages\register\register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_services_validate_service__["a" /* ValidateService */],
        __WEBPACK_IMPORTED_MODULE_3__app_services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_4__app_services_toast_service__["a" /* ToastService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_item_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_toast_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tracked_tracked__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_chart_js__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DetailsPage = (function () {
    function DetailsPage(navCtrl, params, alertCtrl, itemService, toastService, authService) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.alertCtrl = alertCtrl;
        this.itemService = itemService;
        this.toastService = toastService;
        this.authService = authService;
        this.item = params.get('item');
        this.timeFormat = 'MM/DD/YYYY HH:mm';
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        if (this.item.previousPrices.length == 0)
            return;
        this.chart = new __WEBPACK_IMPORTED_MODULE_6_chart_js__["Chart"](this.chartCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                        data: this.formatItemPrices(),
                        label: "Price",
                        borderColor: "#3e95cd",
                        fill: false
                    }
                ]
            },
            options: {
                title: {
                    text: "Chart.js Time Scale"
                },
                legend: {
                    display: false
                },
                tooltips: {
                    callbacks: {
                        label: function (toolTipItem, data) {
                            return '$' + toolTipItem.yLabel;
                        }
                    }
                },
                scales: {
                    xAxes: [{
                            type: "time",
                            time: {
                                format: this.timeFormat,
                                // round: 'day'
                                tooltipFormat: 'll HH:mm'
                            },
                            scaleLabel: {
                                display: false,
                            }
                        }],
                    yAxes: [{
                            scaleLabel: {
                                display: false,
                            },
                            ticks: {
                                callback: function (value, index, values) {
                                    return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
                                }
                            }
                        }]
                }
            }
        });
    };
    DetailsPage.prototype.doRefresh = function (refresher) {
        this.updateItemData();
        setTimeout(function () {
            refresher.complete();
        }, 1500);
    };
    DetailsPage.prototype.newDate = function (days) {
        return __WEBPACK_IMPORTED_MODULE_7_moment__().add(days, 'd').toDate();
    };
    DetailsPage.prototype.newDateString = function (days) {
        return __WEBPACK_IMPORTED_MODULE_7_moment__().add(days, 'd').format(this.timeFormat);
    };
    DetailsPage.prototype.newTimestamp = function (days) {
        return __WEBPACK_IMPORTED_MODULE_7_moment__().add(days, 'd').unix();
    };
    DetailsPage.prototype.formatItemPrices = function () {
        var prices = [];
        for (var i = 0; i < this.item.previousPrices.length; i++) {
            prices.push({
                x: new Date(this.item.previousPrices[i].date),
                y: this.item.previousPrices[i].price / 100
            });
        }
        prices.push({
            x: new Date(this.item.salePrice.date),
            y: this.item.salePrice.price / 100
        });
        return prices;
    };
    DetailsPage.prototype.removeItem = function (asin) {
        var _this = this;
        this.itemService.removeItem(asin).subscribe(function (data) {
            if (data.success) {
                var user = JSON.parse(localStorage.getItem('user'));
                var index = user.trackedItems.indexOf(asin);
                user.trackedItems.splice(index, 1);
                _this.authService.storeUserData(null, user);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tracked_tracked__["a" /* TrackedPage */]);
            }
            _this.toastService.presentToast(data.msg, 'top');
        });
    };
    DetailsPage.prototype.showConfirm = function (asin) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Stop tracking?',
            message: 'Are you sure you want to stop tracking this item?',
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Remove',
                    handler: function () {
                        _this.removeItem(asin);
                    }
                }
            ]
        });
        confirm.present();
    };
    DetailsPage.prototype.updateItemData = function () {
        var _this = this;
        this.itemService.getItemByAsin(this.item.asin)
            .subscribe(function (data) {
            _this.item = data.itemData;
        });
    };
    return DetailsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chartCanvas'),
    __metadata("design:type", Object)
], DetailsPage.prototype, "chartCanvas", void 0);
DetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\dgalp\ionic-projects\amazontracker\src\pages\details\details.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      {{item.title}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-card>\n    <img src="{{item.images.largeImageURL}}"/>\n    <ion-card-content>\n      <ion-card-title>\n        {{item.title}}\n      </ion-card-title>\n      <ion-list>\n        <ion-item>\n          Tracked since {{item.date | date:\'mediumDate\'}}\n        </ion-item>\n        <ion-card-content>\n          <span>Last updated: {{item.lastUpdated | date:\'shortDate\'}} {{item.lastUpdated | date:\'shortTime\'}}</span>\n          <span>List Price: ${{(item.listPrice/100).toFixed(2)}}</span>\n          <span>Current Price: ${{(item.salePrice.price/100).toFixed(2)}}</span>\n        </ion-card-content>\n        <ion-card-header *ngIf="item.previousPrices.length == 0">\n          <strong>No price history available</strong>\n        </ion-card-header>\n        <div *ngIf="item.previousPrices.length > 0">\n          <ion-card-header>\n            <strong>Price History</strong>\n          </ion-card-header>\n          <ion-card-content>\n            <canvas #chartCanvas></canvas>\n          </ion-card-content>\n        </div>\n      </ion-list>\n      <!--<a ion-button target="_blank" href="{{item.detailPageURL}}">Buy on Amazon</a>-->\n    </ion-card-content>\n    <ion-row>\n    <ion-col>\n      <a target="_blank" href="{{item.detailPageURL}}" button ion-button icon-left clear small>\n        <ion-icon name="navigate"></ion-icon>\n        <div>Buy on Amazon</div>\n      </a>\n    </ion-col>\n    <ion-col>\n      <button (click)="showConfirm(item.asin)" ion-button icon-left clear small color="danger">\n        <ion-icon name="remove-circle"></ion-icon>\n        <div>Stop Tracking</div>\n      </button>\n    </ion-col>\n  </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\dgalp\ionic-projects\amazontracker\src\pages\details\details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__app_services_item_service__["a" /* ItemService */],
        __WEBPACK_IMPORTED_MODULE_4__app_services_toast_service__["a" /* ToastService */],
        __WEBPACK_IMPORTED_MODULE_3__app_services_auth_service__["a" /* AuthService */]])
], DetailsPage);

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = (function () {
    function SettingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'settings',template:/*ion-inline-start:"C:\Users\dgalp\ionic-projects\amazontracker\src\pages\settings\settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Settings\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label>Notify me of price changes</ion-label>\n    <ion-toggle checked="false"></ion-toggle>\n  </ion-item>\n  <ion-item>\n    <ion-label>Notify me of new deals</ion-label>\n    <ion-toggle checked="false"></ion-toggle>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\Users\dgalp\ionic-projects\amazontracker\src\pages\settings\settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(389);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_deals_deals__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tracked_tracked__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_details_details__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_validate_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_item_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_toast_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_deals_deals__["a" /* DealsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tracked_tracked__["a" /* TrackedPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_details_details__["a" /* DetailsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_deals_deals__["a" /* DealsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tracked_tracked__["a" /* TrackedPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_details_details__["a" /* DetailsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_14__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_15__services_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_16__services_toast_service__["a" /* ToastService */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //because we're working with observables

var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        //.baseUrl = 'http://localhost:3000';
        this.baseUrl = 'http://10.0.2.2:3000';
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + '/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + '/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function (userId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + '/users/profile', { userId: userId }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        if (token)
            localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, authService) {
        this.authService = authService;
        if (this.authService.loggedIn()) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        }
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\dgalp\ionic-projects\amazontracker\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\dgalp\ionic-projects\amazontracker\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.presentToast = function (msg, position) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: position
        });
        toast.present();
    };
    return ToastService;
}());
ToastService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
], ToastService);

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 268,
	"./af.js": 268,
	"./ar": 269,
	"./ar-dz": 270,
	"./ar-dz.js": 270,
	"./ar-kw": 271,
	"./ar-kw.js": 271,
	"./ar-ly": 272,
	"./ar-ly.js": 272,
	"./ar-ma": 273,
	"./ar-ma.js": 273,
	"./ar-sa": 274,
	"./ar-sa.js": 274,
	"./ar-tn": 275,
	"./ar-tn.js": 275,
	"./ar.js": 269,
	"./az": 276,
	"./az.js": 276,
	"./be": 277,
	"./be.js": 277,
	"./bg": 278,
	"./bg.js": 278,
	"./bn": 279,
	"./bn.js": 279,
	"./bo": 280,
	"./bo.js": 280,
	"./br": 281,
	"./br.js": 281,
	"./bs": 282,
	"./bs.js": 282,
	"./ca": 283,
	"./ca.js": 283,
	"./cs": 284,
	"./cs.js": 284,
	"./cv": 285,
	"./cv.js": 285,
	"./cy": 286,
	"./cy.js": 286,
	"./da": 287,
	"./da.js": 287,
	"./de": 288,
	"./de-at": 289,
	"./de-at.js": 289,
	"./de-ch": 290,
	"./de-ch.js": 290,
	"./de.js": 288,
	"./dv": 291,
	"./dv.js": 291,
	"./el": 292,
	"./el.js": 292,
	"./en-au": 293,
	"./en-au.js": 293,
	"./en-ca": 294,
	"./en-ca.js": 294,
	"./en-gb": 295,
	"./en-gb.js": 295,
	"./en-ie": 296,
	"./en-ie.js": 296,
	"./en-nz": 297,
	"./en-nz.js": 297,
	"./eo": 298,
	"./eo.js": 298,
	"./es": 299,
	"./es-do": 300,
	"./es-do.js": 300,
	"./es.js": 299,
	"./et": 301,
	"./et.js": 301,
	"./eu": 302,
	"./eu.js": 302,
	"./fa": 303,
	"./fa.js": 303,
	"./fi": 304,
	"./fi.js": 304,
	"./fo": 305,
	"./fo.js": 305,
	"./fr": 306,
	"./fr-ca": 307,
	"./fr-ca.js": 307,
	"./fr-ch": 308,
	"./fr-ch.js": 308,
	"./fr.js": 306,
	"./fy": 309,
	"./fy.js": 309,
	"./gd": 310,
	"./gd.js": 310,
	"./gl": 311,
	"./gl.js": 311,
	"./gom-latn": 312,
	"./gom-latn.js": 312,
	"./he": 313,
	"./he.js": 313,
	"./hi": 314,
	"./hi.js": 314,
	"./hr": 315,
	"./hr.js": 315,
	"./hu": 316,
	"./hu.js": 316,
	"./hy-am": 317,
	"./hy-am.js": 317,
	"./id": 318,
	"./id.js": 318,
	"./is": 319,
	"./is.js": 319,
	"./it": 320,
	"./it.js": 320,
	"./ja": 321,
	"./ja.js": 321,
	"./jv": 322,
	"./jv.js": 322,
	"./ka": 323,
	"./ka.js": 323,
	"./kk": 324,
	"./kk.js": 324,
	"./km": 325,
	"./km.js": 325,
	"./kn": 326,
	"./kn.js": 326,
	"./ko": 327,
	"./ko.js": 327,
	"./ky": 328,
	"./ky.js": 328,
	"./lb": 329,
	"./lb.js": 329,
	"./lo": 330,
	"./lo.js": 330,
	"./lt": 331,
	"./lt.js": 331,
	"./lv": 332,
	"./lv.js": 332,
	"./me": 333,
	"./me.js": 333,
	"./mi": 334,
	"./mi.js": 334,
	"./mk": 335,
	"./mk.js": 335,
	"./ml": 336,
	"./ml.js": 336,
	"./mr": 337,
	"./mr.js": 337,
	"./ms": 338,
	"./ms-my": 339,
	"./ms-my.js": 339,
	"./ms.js": 338,
	"./my": 340,
	"./my.js": 340,
	"./nb": 341,
	"./nb.js": 341,
	"./ne": 342,
	"./ne.js": 342,
	"./nl": 343,
	"./nl-be": 344,
	"./nl-be.js": 344,
	"./nl.js": 343,
	"./nn": 345,
	"./nn.js": 345,
	"./pa-in": 346,
	"./pa-in.js": 346,
	"./pl": 347,
	"./pl.js": 347,
	"./pt": 348,
	"./pt-br": 349,
	"./pt-br.js": 349,
	"./pt.js": 348,
	"./ro": 350,
	"./ro.js": 350,
	"./ru": 351,
	"./ru.js": 351,
	"./sd": 352,
	"./sd.js": 352,
	"./se": 353,
	"./se.js": 353,
	"./si": 354,
	"./si.js": 354,
	"./sk": 355,
	"./sk.js": 355,
	"./sl": 356,
	"./sl.js": 356,
	"./sq": 357,
	"./sq.js": 357,
	"./sr": 358,
	"./sr-cyrl": 359,
	"./sr-cyrl.js": 359,
	"./sr.js": 358,
	"./ss": 360,
	"./ss.js": 360,
	"./sv": 361,
	"./sv.js": 361,
	"./sw": 362,
	"./sw.js": 362,
	"./ta": 363,
	"./ta.js": 363,
	"./te": 364,
	"./te.js": 364,
	"./tet": 365,
	"./tet.js": 365,
	"./th": 366,
	"./th.js": 366,
	"./tl-ph": 367,
	"./tl-ph.js": 367,
	"./tlh": 368,
	"./tlh.js": 368,
	"./tr": 369,
	"./tr.js": 369,
	"./tzl": 370,
	"./tzl.js": 370,
	"./tzm": 371,
	"./tzm-latn": 372,
	"./tzm-latn.js": 372,
	"./tzm.js": 371,
	"./uk": 373,
	"./uk.js": 373,
	"./ur": 374,
	"./ur.js": 374,
	"./uz": 375,
	"./uz-latn": 376,
	"./uz-latn.js": 376,
	"./uz.js": 375,
	"./vi": 377,
	"./vi.js": 377,
	"./x-pseudo": 378,
	"./x-pseudo.js": 378,
	"./yo": 379,
	"./yo.js": 379,
	"./zh-cn": 380,
	"./zh-cn.js": 380,
	"./zh-hk": 381,
	"./zh-hk.js": 381,
	"./zh-tw": 382,
	"./zh-tw.js": 382
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 727;

/***/ })

},[384]);
//# sourceMappingURL=main.js.map