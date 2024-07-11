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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(databaseService, jwtService) {
        this.databaseService = databaseService;
        this.jwtService = jwtService;
    }
    async register(registerDTO) {
        const user = await this.databaseService.user.findFirst({
            where: {
                email: registerDTO.email,
            },
        });
        if (user) {
            throw new common_1.BadGatewayException('User with this email already exists!');
        }
        registerDTO.password = await bcrypt.hash(registerDTO.password, 10);
        const res = await this.databaseService.user.create({ data: registerDTO });
        return res;
    }
    async login(loginDTO) {
        const user = await this.databaseService.user.findFirst({
            where: {
                email: loginDTO.email,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException('User Not exist!');
        }
        const validatePassword = await bcrypt.compare(loginDTO.password, user.password);
        if (!validatePassword) {
            throw new common_1.NotFoundException('Invalid Credentials!');
        }
        return {
            accessToken: this.jwtService.sign({ email: loginDTO.email }),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map