import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import Joi from 'joi';
export declare class ValidationPipe implements PipeTransform<any> {
    private readonly schema;
    constructor(schema: Joi.Schema);
    transform(value: any, metadata: ArgumentMetadata): any;
}
