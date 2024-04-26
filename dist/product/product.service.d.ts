import { Repository } from 'typeorm';
import { Product } from '../model/product.entity';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    findById(id: number): Promise<Product | undefined>;
    find(): Promise<Product[] | undefined>;
    create(body: any): Promise<any>;
    update(body: any): Promise<any>;
}
