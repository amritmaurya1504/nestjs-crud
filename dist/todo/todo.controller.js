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
exports.TodoController = void 0;
const common_1 = require("@nestjs/common");
const todo_service_1 = require("./todo.service");
const create_todo_dto_1 = require("./dto/create-todo.dto");
const update_todo_dto_1 = require("./dto/update-todo.dto");
const auth_guard_1 = require("../auth/auth.guard");
const user_email_decorator_1 = require("../common/decorators/user-email.decorator");
const swagger_1 = require("@nestjs/swagger");
let TodoController = class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    create(createTodoDto, userEmail) {
        return this.todoService.create(createTodoDto, userEmail);
    }
    findAll(userEmail) {
        return this.todoService.findAll(userEmail);
    }
    findOne(id) {
        return this.todoService.findOne(+id);
    }
    update(id, updateTodoDto) {
        return this.todoService.update(+id, updateTodoDto);
    }
    remove(id) {
        return this.todoService.remove(+id);
    }
};
exports.TodoController = TodoController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Create a new todo item',
        description: 'This endpoint allows an authenticated user to create a new todo item. The user must provide the necessary details such as title and description in the request body.'
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_email_decorator_1.UserEmail)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_todo_dto_1.CreateTodoDto, String]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Get all todo items',
        description: 'This endpoint retrieves all todo items for the authenticated user. The user\'s email is used to fetch their specific todo items.'
    }),
    __param(0, (0, user_email_decorator_1.UserEmail)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get a specific todo item',
        description: 'This endpoint retrieves a specific todo item by its ID. The ID should be provided as a path parameter.'
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Update a specific todo item',
        description: 'This endpoint allows an authenticated user to update a specific todo item by its ID. The ID should be provided as a path parameter, and the updated details should be provided in the request body.'
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_todo_dto_1.UpdateTodoDto]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Delete a specific todo item',
        description: 'This endpoint allows an authenticated user to delete a specific todo item by its ID. The ID should be provided as a path parameter.'
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "remove", null);
exports.TodoController = TodoController = __decorate([
    (0, swagger_1.ApiTags)('Todo'),
    (0, common_1.Controller)('todo'),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
//# sourceMappingURL=todo.controller.js.map