"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComunidadesModule = void 0;
const common_1 = require("@nestjs/common");
const comunidades_service_1 = require("./comunidades.service");
const comunidades_controller_1 = require("./comunidades.controller");
const mongoose_1 = require("@nestjs/mongoose");
const comunidades_schema_1 = require("./schemas/comunidades.schema");
let ComunidadesModule = exports.ComunidadesModule = class ComunidadesModule {
};
exports.ComunidadesModule = ComunidadesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: comunidades_schema_1.Comunidad.name, schema: comunidades_schema_1.ComunidadSchema },
            ]),
        ],
        controllers: [comunidades_controller_1.ComunidadesController],
        providers: [comunidades_service_1.ComunidadesService],
    })
], ComunidadesModule);
//# sourceMappingURL=comunidades.module.js.map