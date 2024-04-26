export declare enum ProductStatusEnum {
    ACTIVE = "Active",
    DELETED = "Deleted",
    INACTIVE = "Inactive"
}
export declare class Product {
    id: number;
    name: string;
    unit: string;
    category: string;
    quantity: number;
    is_quantity: boolean;
    description: string;
    barcode: string;
    price: number;
    cost: number;
    status: ProductStatusEnum;
    created_at: Date;
    updated_at: Date;
}
