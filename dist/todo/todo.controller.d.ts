import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    create(createTodoDto: CreateTodoDto, userEmail: string): Promise<CreateTodoDto>;
    findAll(userEmail: string): Promise<{
        id: number;
        title: string;
        desc: string;
        status: import(".prisma/client").$Enums.TodoStatus;
        createdAt: Date;
        updatedAt: Date;
        userEmail: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        title: string;
        desc: string;
        status: import(".prisma/client").$Enums.TodoStatus;
        createdAt: Date;
        updatedAt: Date;
        userEmail: string | null;
    }>;
    update(id: string, updateTodoDto: UpdateTodoDto): Promise<{
        id: number;
        title: string;
        desc: string;
        status: import(".prisma/client").$Enums.TodoStatus;
        createdAt: Date;
        updatedAt: Date;
        userEmail: string | null;
    }>;
    remove(id: string): Promise<{
        id: number;
        title: string;
        desc: string;
        status: import(".prisma/client").$Enums.TodoStatus;
        createdAt: Date;
        updatedAt: Date;
        userEmail: string | null;
    }>;
}
