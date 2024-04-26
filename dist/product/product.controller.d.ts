import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    products(): Promise<import("../model/product.entity").Product[]>;
    create(body: any): Promise<any>;
    update(body: any): Promise<any>;
    product(param: any): Promise<import("../model/product.entity").Product>;
}
