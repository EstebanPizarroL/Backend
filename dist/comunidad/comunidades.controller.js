"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComunidadesController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const comunidades_service_1 = require("./comunidades.service");
const create_comunidad_dto_1 = require("./dto/create-comunidad.dto");
const update_comunidad_dto_1 = require("./dto/update-comunidad.dto");
let ComunidadesController = exports.ComunidadesController = class ComunidadesController {
    constructor(comunidadesService) {
        this.comunidadesService = comunidadesService;
    }
    create(createComunidadDto) {
        return this.comunidadesService.create(createComunidadDto);
    }
    findAll(request) {
        return this.comunidadesService.findAll(request);
    }
    findOne(id) {
        return this.comunidadesService.findOne(id);
    }
    update(id, updateComunidadDto) {
        return this.comunidadesService.update(id, updateComunidadDto);
    }
    remove(id) {
        return this.comunidadesService.remove(id);
    }
};
__decorate([
    (0, common_2.Post)(),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comunidad_dto_1.CreateComunidadDto]),
    __metadata("design:returntype", void 0)
], ComunidadesController.prototype, "create", null);
__decorate([
    (0, common_2.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ComunidadesController.prototype, "findAll", null);
__decorate([
    (0, common_2.Get)(':id'),
    __param(0, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComunidadesController.prototype, "findOne", null);
__decorate([
    (0, common_2.Patch)(':id'),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_comunidad_dto_1.UpdateComunidadDto]),
    __metadata("design:returntype", void 0)
], ComunidadesController.prototype, "update", null);
__decorate([
    (0, common_2.Delete)(':id'),
    __param(0, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComunidadesController.prototype, "remove", null);
exports.ComunidadesController = ComunidadesController = __decorate([
    (0, common_2.Controller)('comunidades'),
    (0, swagger_1.ApiTags)('comunidad'),
    __metadata("design:paramtypes", [comunidades_service_1.ComunidadesService])
], ComunidadesController);
//# sourceMappingURL=comunidades.controller.js.map