import { Customer } from './customer.entity';
import { User } from './user.entity';
import { OrderItem } from './order_item.entity';
export declare class Order {
    id: number;
    user_id: number;
    user: User;
    customer_id: number;
    order_item: OrderItem[];
    customer: Customer;
    total: number;
    give_amount: number;
    return_amount: number;
    order_number: string;
    wait_number: string;
    payment_method: string;
    created_at: Date;
    updated_at: Date;
}
