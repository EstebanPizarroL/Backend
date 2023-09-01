"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsociadosModule = void 0;
const common_1 = require("@nestjs/common");
const asociados_service_1 = require("./asociados.service");
const asociados_controller_1 = require("./asociados.controller");
const mongoose_1 = require("@nestjs/mongoose");
const asociados_schema_1 = require("./schemas/asociados.schema");
let AsociadosModule = exports.AsociadosModule = class AsociadosModule {
};
exports.AsociadosModule = AsociadosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: asociados_schema_1.Asociado.name, schema: asociados_schema_1.AsociadoSchema },
            ]),
        ],
        controllers: [asociados_controller_1.AsociadosController],
        providers: [asociados_service_1.AsociadosService],
    })
], AsociadosModule);
//# sourceMappingURL=asociados.module.js.map