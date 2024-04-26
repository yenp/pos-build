import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: any): Promise<{
        access_token: string;
        user: {
            phone: string;
            name: string;
            id: number;
            role: string;
        };
    }>;
}
