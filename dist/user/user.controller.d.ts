import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    users(): Promise<import("../model/user.entity").User[]>;
    create(body: any): Promise<any>;
    update(body: any): Promise<any>;
    user(param: any): Promise<import("../model/user.entity").User>;
}
