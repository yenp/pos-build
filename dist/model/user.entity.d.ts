export declare enum UserStatusEnum {
    ACTIVE = "Active",
    INACTIVE = "Inactive",
    DELETED = "Deleted"
}
export declare class User {
    id: number;
    phone: string;
    password: string;
    name: string;
    role: number;
    status: string;
    created_at: Date;
}
