import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { DatabaseService } from 'src/database/database.service';
export declare class TodoService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
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
    findOne(id: number): Promise<{
        id: number;
        title: string;
        desc: string;
        status: import(".prisma/client").$Enums.TodoStatus;
        createdAt: Date;
        updatedAt: Date;
        userEmail: string | null;
    }>;
    update(id: number, updateTodoDto: UpdateTodoDto): Promise<{
        id: number;
        title: string;
        desc: string;
        status: import(".prisma/client").$Enums.TodoStatus;
        createdAt: Date;
        updatedAt: Date;
        userEmail: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        title: string;
        desc: string;
        status: import(".prisma/client").$Enums.TodoStatus;
        createdAt: Date;
        updatedAt: Date;
        userEmail: string | null;
    }>;
}
