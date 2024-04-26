"use strict";var __decorate=this&&this.__decorate||function(e,t,o,r){var n,_=arguments.length,a=_<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var d=e.length-1;0<=d;d--)(n=e[d])&&(a=(_<3?n(a):3<_?n(t,o,a):n(t,o))||a);return 3<_&&a&&Object.defineProperty(t,o,a),a},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Inventory=void 0;const typeorm_1=require("typeorm"),product_entity_1=require("./product.entity"),user_entity_1=require("./user.entity");let Inventory=class{};exports.Inventory=Inventory,__decorate([(0,typeorm_1.PrimaryGeneratedColumn)(),__metadata("design:type",Number)],Inventory.prototype,"id",void 0),__decorate([(0,typeorm_1.Column)(),__metadata("design:type",Number)],Inventory.prototype,"product_id",void 0),__decorate([(0,typeorm_1.ManyToOne)(()=>product_entity_1.Product),(0,typeorm_1.JoinColumn)({name:"product_id"}),__metadata("design:type",product_entity_1.Product)],Inventory.prototype,"product",void 0),__decorate([(0,typeorm_1.Column)(),__metadata("design:type",Number)],Inventory.prototype,"user_id",void 0),__decorate([(0,typeorm_1.ManyToOne)(()=>user_entity_1.User),(0,typeorm_1.JoinColumn)({name:"user_id"}),__metadata("design:type",user_entity_1.User)],Inventory.prototype,"user",void 0),__decorate([(0,typeorm_1.Column)(),__metadata("design:type",Number)],Inventory.prototype,"quantity",void 0),__decorate([(0,typeorm_1.Column)({type:"timestamp",default:()=>"CURRENT_TIMESTAMP"}),__metadata("design:type",Date)],Inventory.prototype,"created_at",void 0),__decorate([(0,typeorm_1.Column)({type:"timestamp",default:()=>"CURRENT_TIMESTAMP",onUpdate:"CURRENT_TIMESTAMP"}),__metadata("design:type",Date)],Inventory.prototype,"updated_at",void 0),exports.Inventory=Inventory=__decorate([(0,typeorm_1.Entity)()],Inventory);