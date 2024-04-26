"use strict";var __decorate=this&&this.__decorate||function(e,t,r,o){var a,c=arguments.length,n=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var d=e.length-1;0<=d;d--)(a=e[d])&&(n=(c<3?a(n):3<c?a(t,r,n):a(t,r))||n);return 3<c&&n&&Object.defineProperty(t,r,n),n},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},__param=this&&this.__param||function(r,o){return function(e,t){o(e,t,r)}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ProductController=void 0;const common_1=require("@nestjs/common"),product_service_1=require("./product.service"),jwt_user_guard_1=require("../auth/jwt-user.guard"),joi_validation_pipe_1=require("../pipes/joi-validation.pipe"),create_schema_1=require("../validation/create.schema");let ProductController=class{constructor(e){this.productService=e}async products(){return this.productService.find()}async create(e){return this.productService.create(e)}async update(e){return this.productService.update(e)}async product(e){return this.productService.findById(e.id)}};exports.ProductController=ProductController,__decorate([(0,common_1.Get)("/list"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",Promise)],ProductController.prototype,"products",null),__decorate([(0,common_1.Put)("create"),(0,common_1.UsePipes)(new joi_validation_pipe_1.ValidationPipe(create_schema_1.createProductJoi)),__param(0,(0,common_1.Body)()),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",Promise)],ProductController.prototype,"create",null),__decorate([(0,common_1.Put)("update"),(0,common_1.UsePipes)(new joi_validation_pipe_1.ValidationPipe(create_schema_1.updateProductJoi)),__param(0,(0,common_1.Body)()),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",Promise)],ProductController.prototype,"update",null),__decorate([(0,common_1.Get)("detail/:id"),__param(0,(0,common_1.Param)()),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",Promise)],ProductController.prototype,"product",null),exports.ProductController=ProductController=__decorate([(0,common_1.UseGuards)(jwt_user_guard_1.JwtUserAuthGuard),(0,common_1.Controller)("product"),__metadata("design:paramtypes",[product_service_1.ProductService])],ProductController);