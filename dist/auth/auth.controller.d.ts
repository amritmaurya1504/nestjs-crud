import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/register.dto';
import { LoginDTO } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(registerDTO: RegisterDTO): Promise<{
        id: number;
        email: string;
        password: string;
        name: string;
    }>;
    login(loginDTO: LoginDTO): Promise<{
        accessToken: string;
    }>;
}
