import { AuthService } from './auth.service';
declare const JwtUserStrategy_base: new (...args: any[]) => any;
export declare class JwtUserStrategy extends JwtUserStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(payload: any): Promise<{
        id: any;
    }>;
}
export {};
