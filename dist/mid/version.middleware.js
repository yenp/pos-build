"use strict";var __decorate=this&&this.__decorate||function(e,r,o,t){var i,s=arguments.length,n=s<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,r,o,t);else for(var c=e.length-1;0<=c;c--)(i=e[c])&&(n=(s<3?i(n):3<s?i(r,o,n):i(r,o))||n);return 3<s&&n&&Object.defineProperty(r,o,n),n};Object.defineProperty(exports,"__esModule",{value:!0}),exports.VersionMiddleware=void 0;const common_1=require("@nestjs/common");let VersionMiddleware=class{use(e,r,o){r.setHeader("X-Application-Version",process.env.APP_VERSION),o()}};exports.VersionMiddleware=VersionMiddleware,exports.VersionMiddleware=VersionMiddleware=__decorate([(0,common_1.Injectable)()],VersionMiddleware);