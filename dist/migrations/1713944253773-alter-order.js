"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AlterOrder1713944253773=void 0;class AlterOrder1713944253773{async up(e){await e.query("ALTER TABLE `order` ADD COLUMN order_number VARCHAR(255) NULL AFTER total, ADD COLUMN wait_number VARCHAR(255) NULL AFTER order_number, ADD COLUMN give_amount decimal(10,2) NULL AFTER wait_number, ADD COLUMN return_amount decimal(10,2) NULL AFTER give_amount, ADD COLUMN payment_method VARCHAR(255) NULL AFTER return_amount")}async down(e){}}exports.AlterOrder1713944253773=AlterOrder1713944253773;