"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const users_module_1 = require("./users/users.module");
const asociados_module_1 = require("./asociados/asociados.module");
const alimentos_module_1 = require("./alimentos/alimentos.module");
const accesorios_module_1 = require("./accesorios/accesorios.module");
const servicios_module_1 = require("./servicios/servicios.module");
const comunidades_module_1 = require("./comunidad/comunidades.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://estebanpi1976:estebanpi1976@cluster0.c6tswxz.mongodb.net/tutorialdb?retryWrites=true&w=majority'),
            asociados_module_1.AsociadosModule,
            alimentos_module_1.AlimentosModule,
            accesorios_module_1.AccesoriosModule,
            servicios_module_1.ServiciosModule,
            comunidades_module_1.ComunidadesModule,
            users_module_1.UsersModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map