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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const create_user_dto_1 = require("./dto/create-user.dto");
const login_user_dto_1 = require("./dto/login-user.dto");
const user_service_1 = require("./user.service");
const config_1 = require("@nestjs/config");
let UserController = class UserController {
    userService;
    configService;
    constructor(userService, configService) {
        this.userService = userService;
        this.configService = configService;
    }
    async signUp(createUserDto, res) {
        const { token, message } = await this.userService.signUp(createUserDto);
        res.cookie("session_code", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production" ? true : false,
            sameSite: 'lax',
            maxAge: 30 * 24 * 60 * 60 * 1000
        });
        return {
            message
        };
    }
    async signIn(loginUserDto, res) {
        const { token, message } = await this.userService.signIn(loginUserDto);
        res.cookie("session_code", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production" ? true : false,
            sameSite: 'lax',
            maxAge: 30 * 24 * 60 * 60 * 1000
        });
        return {
            message
        };
    }
    async gitHubAuth() { }
    async githubCallback(req, res) {
        const result = await this.userService.githubCallback(req.user);
        res.cookie("session_code", result.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production" ? true : false,
            sameSite: 'lax',
            maxAge: 30 * 24 * 60 * 60 * 1000
        });
        const frontendUrl = this.configService.getOrThrow("FRONTEND_URL");
        return res.redirect(`${frontendUrl}/dashboard`);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)("sign-up"),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)("sign-in"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.LoginUserDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signIn", null);
__decorate([
    (0, common_1.Get)("github"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("github")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "gitHubAuth", null);
__decorate([
    (0, common_1.Get)("github/callback"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("github")),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "githubCallback", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        config_1.ConfigService])
], UserController);
//# sourceMappingURL=user.controller.js.map