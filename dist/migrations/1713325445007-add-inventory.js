"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AddInventory1713325445007=void 0;const typeorm_1=require("typeorm");class AddInventory1713325445007{async up(e){await e.createTable(new typeorm_1.Table({name:"inventroy",columns:[{name:"id",type:"int",isPrimary:!0,isGenerated:!0,generationStrategy:"increment"},{name:"product_id",type:"int",isNullable:!1},{name:"user_id",type:"int",isNullable:!1},{name:"quantity",type:"int",isNullable:!1},{name:"created_at",type:"timestamp",default:"CURRENT_TIMESTAMP"},{name:"updated_at",type:"timestamp",default:"CURRENT_TIMESTAMP",onUpdate:"CURRENT_TIMESTAMP"}],foreignKeys:[{columnNames:["product_id"],referencedTableName:"product",referencedColumnNames:["id"],onDelete:"CASCADE"}]})),await e.createTable(new typeorm_1.Table({name:"customer",columns:[{name:"id",type:"int",isPrimary:!0,isGenerated:!0,generationStrategy:"increment"},{name:"user_id",type:"int",isNullable:!1},{name:"name",type:"varchar",isNullable:!0},{name:"phone",type:"varchar",isNullable:!1},{name:"address",type:"varchar",isNullable:!1},{name:"created_at",type:"timestamp",default:"CURRENT_TIMESTAMP"},{name:"updated_at",type:"timestamp",default:"CURRENT_TIMESTAMP",onUpdate:"CURRENT_TIMESTAMP"}]})),await e.createTable(new typeorm_1.Table({name:"order",columns:[{name:"id",type:"int",isPrimary:!0,isGenerated:!0,generationStrategy:"increment"},{name:"user_id",type:"int",isNullable:!1},{name:"customer_id",type:"int",isNullable:!0},{name:"total",type:"decimal(10,2)"},{name:"created_at",type:"timestamp",default:"CURRENT_TIMESTAMP"},{name:"updated_at",type:"timestamp",default:"CURRENT_TIMESTAMP",onUpdate:"CURRENT_TIMESTAMP"}],foreignKeys:[{columnNames:["customer_id"],referencedTableName:"customer",referencedColumnNames:["id"],onDelete:"CASCADE"},{columnNames:["user_id"],referencedTableName:"user",referencedColumnNames:["id"],onDelete:"CASCADE"}]})),await e.createTable(new typeorm_1.Table({name:"order_item",columns:[{name:"id",type:"int",isPrimary:!0,isGenerated:!0,generationStrategy:"increment"},{name:"order_id",type:"int",isNullable:!1},{name:"product_id",type:"int",isNullable:!1},{name:"price",type:"decimal(10,2)"},{name:"cost",type:"decimal(10,2)"},{name:"total",type:"decimal(10,2)"},{name:"quantity",type:"int",isNullable:!1}],foreignKeys:[{columnNames:["order_id"],referencedTableName:"order",referencedColumnNames:["id"],onDelete:"CASCADE"},{columnNames:["product_id"],referencedTableName:"product",referencedColumnNames:["id"],onDelete:"CASCADE"}]}))}async down(e){}}exports.AddInventory1713325445007=AddInventory1713325445007;