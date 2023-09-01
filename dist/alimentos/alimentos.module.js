"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlimentosModule = void 0;
const common_1 = require("@nestjs/common");
const alimentos_service_1 = require("./alimentos.service");
const alimentos_controller_1 = require("./alimentos.controller");
const mongoose_1 = require("@nestjs/mongoose");
const alimento_schema_1 = require("./schemas/alimento.schema");
let AlimentosModule = exports.AlimentosModule = class AlimentosModule {
};
exports.AlimentosModule = AlimentosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: alimento_schema_1.Alimento.name, schema: alimento_schema_1.AlimentoSchema },
            ]),
        ],
        controllers: [alimentos_controller_1.AlimentosController],
        providers: [alimentos_service_1.AlimentosService],
    })
], AlimentosModule);
//# sourceMappingURL=alimentos.module.js.map