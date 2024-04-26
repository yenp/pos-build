import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    getOrderNumber(): Promise<number>;
    orders(): Promise<import("../model/order.entity").Order[]>;
    create(body: any, req: any): Promise<any>;
    order(param: any): Promise<import("../model/order.entity").Order>;
}
