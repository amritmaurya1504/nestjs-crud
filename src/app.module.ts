import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { TodoModule } from './todo/todo.module';
import { AuthModule } from './auth/auth.module';
import { RootController } from './app.controller';

@Module({
  imports: [DatabaseModule, TodoModule, AuthModule],
  controllers: [RootController],
  providers: [],
})
export class AppModule {}
