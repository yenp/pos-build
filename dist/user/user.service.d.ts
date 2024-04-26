import { Repository } from 'typeorm';
import { User } from '../model/user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findById(id: number): Promise<User | undefined>;
    find(): Promise<User[] | undefined>;
    create(body: any): Promise<any>;
    update(body: any): Promise<any>;
    protected hashPassword(password: string): Promise<string>;
}
