import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
export declare class ErrorExceptionFilter implements ExceptionFilter {
    catch(exception: Error, host: ArgumentsHost): void;
}
