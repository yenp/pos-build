import { JwtService } from '@nestjs/jwt';
import { User } from 'src/model/user.entity';
import { Repository } from 'typeorm';
import { CommonService } from 'src/common/common.service';
export declare class AuthService {
    private readonly userRepository;
    private readonly jwtService;
    private readonly commonService;
    constructor(userRepository: Repository<User>, jwtService: JwtService, commonService: CommonService);
    validateUser(payload: any): Promise<any>;
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
