import { Product } from './product.entity';
import { User } from './user.entity';
export declare class Inventory {
    id: number;
    product_id: number;
    product: Product;
    user_id: number;
    user: User;
    quantity: number;
    created_at: Date;
    updated_at: Date;
}
