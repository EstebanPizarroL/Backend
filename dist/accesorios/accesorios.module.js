"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccesoriosModule = void 0;
const common_1 = require("@nestjs/common");
const accesorios_service_1 = require("./accesorios.service");
const accesorios_controller_1 = require("./accesorios.controller");
const mongoose_1 = require("@nestjs/mongoose");
const accesorios_schema_1 = require("./schemas/accesorios.schema");
let AccesoriosModule = exports.AccesoriosModule = class AccesoriosModule {
};
exports.AccesoriosModule = AccesoriosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: accesorios_schema_1.Accesorio.name, schema: accesorios_schema_1.AccesorioSchema },
            ]),
        ],
        controllers: [accesorios_controller_1.AccesoriosController],
        providers: [accesorios_service_1.AccesoriosService],
    })
], AccesoriosModule);
//# sourceMappingURL=accesorios.module.js.map