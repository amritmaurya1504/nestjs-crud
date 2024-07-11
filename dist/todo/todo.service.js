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
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let TodoService = class TodoService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async create(createTodoDto, userEmail) {
        try {
            const user = await this.databaseService.user.findFirst({ where: { email: userEmail } });
            if (!user) {
                throw new common_1.NotFoundException("User Not Found!");
            }
            let data = {
                title: createTodoDto.title,
                desc: createTodoDto.desc,
                status: 'ACTIVE',
                user: {
                    connect: { email: user.email }
                }
            };
            console.log(data);
            return await this.databaseService.todo.create({ data });
        }
        catch (error) {
            return error;
        }
    }
    async findAll(userEmail) {
        return await this.databaseService.todo.findMany({
            where: {
                userEmail: userEmail
            }
        });
    }
    async findOne(id) {
        return await this.databaseService.todo.findFirst({
            where: {
                id: id,
            },
        });
    }
    async update(id, updateTodoDto) {
        return await this.databaseService.todo.update({
            where: {
                id: id,
            },
            data: updateTodoDto,
        });
    }
    async remove(id) {
        return await this.databaseService.todo.delete({
            where: {
                id: id,
            },
        });
    }
};
exports.TodoService = TodoService;
exports.TodoService = TodoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], TodoService);
//# sourceMappingURL=todo.service.js.map