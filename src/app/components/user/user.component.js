"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var UserComponent = (function () {
    function UserComponent(http) {
        var _this = this;
        this.http = http;
        this.val = 0;
        this.conval = 0;
        http.get('https://api.fixer.io/latest?base=CAD')
            .map(function (resp) { return resp.json(); }).subscribe((function (price) {
            _this.price = price;
        }));
        http.get('https://api.fixer.io/latest?base=USD')
            .map(function (resp) { return resp.json(); }).subscribe((function (price1) {
            _this.price1 = price1;
        }));
        http.get('https://api.fixer.io/latest?base=EUR')
            .map(function (resp) { return resp.json(); }).subscribe((function (price2) {
            _this.price2 = price2;
        }));
        this.optionSelected1 = "CAD";
        this.optionSelected2 = "CAD";
    }
    UserComponent.prototype.amtChange = function () {
        if (this.optionSelected1 == 'CAD') {
            if (this.optionSelected2 == "USD") {
                this.conval = this.val * this.price.rates.USD;
            }
            if (this.optionSelected2 == "EUR") {
                this.conval = this.val * this.price.rates.EUR;
            }
            if (this.optionSelected2 == "CAD") {
                this.conval = this.val;
            }
        }
        if (this.optionSelected1 == 'USD') {
            if (this.optionSelected2 == "CAD") {
                this.conval = this.val * this.price1.rates.CAD;
            }
            if (this.optionSelected2 == "EUR") {
                this.conval = this.val * this.price1.rates.EUR;
            }
            if (this.optionSelected2 == "USD") {
                this.conval = this.val;
            }
        }
        if (this.optionSelected1 == 'EUR') {
            if (this.optionSelected2 == "CAD") {
                this.conval = this.val * this.price2.rates.CAD;
            }
            if (this.optionSelected2 == "USD") {
                this.conval = this.val * this.price2.rates.USD;
            }
            if (this.optionSelected2 == "EUR") {
                this.conval = this.val;
            }
        }
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'user',
        templateUrl: "./user.component.html",
    }),
    __metadata("design:paramtypes", [http_1.Http])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map