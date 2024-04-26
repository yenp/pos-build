import { Order } from './order.entity';
import { Product } from './product.entity';
export declare class OrderItem {
    id: number;
    order_id: number;
    order: Order;
    product_id: number;
    product: Product;
    price: number;
    cost: number;
    total: number;
    quantity: number;
}
