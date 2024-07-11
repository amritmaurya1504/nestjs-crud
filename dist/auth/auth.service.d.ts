import { RegisterDTO } from './dto/register.dto';
import { DatabaseService } from 'src/database/database.service';
import { LoginDTO } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly databaseService;
    private readonly jwtService;
    constructor(databaseService: DatabaseService, jwtService: JwtService);
    register(registerDTO: RegisterDTO): Promise<{
        id: number;
        email: string;
        password: string;
        name: string;
    }>;
    login(loginDTO: LoginDTO): Promise<{
        accessToken: string;
    }>;
}
