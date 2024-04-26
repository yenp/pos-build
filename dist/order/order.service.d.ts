import { DataSource, Repository } from 'typeorm';
import { Order } from '../model/order.entity';
import { ConfigApp } from 'src/model/config_app.entity';
export declare class OrderService {
    private readonly orderRepository;
    private readonly configAppRepository;
    private dataSource;
    constructor(orderRepository: Repository<Order>, configAppRepository: Repository<ConfigApp>, dataSource: DataSource);
    findByOrderNumber(): Promise<number | undefined>;
    findById(id: number): Promise<Order | undefined>;
    find(): Promise<Order[] | undefined>;
    create(body: any): Promise<any>;
    update(body: any): Promise<any>;
}
