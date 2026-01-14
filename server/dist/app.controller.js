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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const app_interface_1 = require("./app/app.interface");
const app_validation_1 = require("./app.validation");
const response_interceptor_1 = require("./response.interceptor");
const app_filter_1 = require("./app/app.filter");
let AppController = class AppController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    getAll() {
        return this.appService.getAllMessages();
    }
    createMessage(messageDto) {
        return this.appService.createMessage(messageDto);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AppController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('/new'),
    __param(0, (0, common_1.Body)(new app_validation_1.CreateMessagesPipe(app_interface_1.createMessageSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createMessage", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)('messages'),
    (0, common_1.UseInterceptors)(new response_interceptor_1.ResponseInterceptor()),
    (0, common_1.UseFilters)(new app_filter_1.AppFilter()),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map