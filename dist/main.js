"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Todo Application API')
        .setDescription('API documentation for the Todo Application built with NestJS. This API allows users to create, read, update, and delete tasks, manage user authentication, and more. It demonstrates the use of NestJS features such as validation, authentication, and Swagger integration.')
        .setVersion('1.0')
        .addTag('Todos (Author: Amrit Raj)', 'Endpoints related to managing todos')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map