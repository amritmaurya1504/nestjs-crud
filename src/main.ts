import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Todo Application API')
    .setDescription(
      'API documentation for the Todo Application built with NestJS. This API allows users to create, read, update, and delete tasks, manage user authentication, and more. It demonstrates the use of NestJS features such as validation, authentication, and Swagger integration.',
    )
    .setVersion('1.0')
    .addTag('todos', 'Endpoints related to managing todos')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
