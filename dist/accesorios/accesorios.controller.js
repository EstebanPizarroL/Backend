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
exports.AccesoriosController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const accesorios_service_1 = require("./accesorios.service");
const create_accesorio_dto_1 = require("./dto/create-accesorio.dto");
const update_accesorio_dto_1 = require("./dto/update-accesorio.dto");
let AccesoriosController = exports.AccesoriosController = class AccesoriosController {
    constructor(accesoriosService) {
        this.accesoriosService = accesoriosService;
    }
    create(createAccesorioDto) {
        return this.accesoriosService.create(createAccesorioDto);
    }
    findAll(request) {
        return this.accesoriosService.findAll(request);
        return "Modulo de Accesorios";
    }
    findOne(id) {
        return this.accesoriosService.findOne(id);
    }
    update(id, updateAccesorioDto) {
        return this.accesoriosService.update(id, updateAccesorioDto);
    }
    remove(id) {
        return this.accesoriosService.remove(id);
    }
};
__decorate([
    (0, common_2.Post)(),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_accesorio_dto_1.CreateAccesorioDto]),
    __metadata("design:returntype", void 0)
], AccesoriosController.prototype, "create", null);
__decorate([
    (0, common_2.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AccesoriosController.prototype, "findAll", null);
__decorate([
    (0, common_2.Get)(':id'),
    __param(0, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AccesoriosController.prototype, "findOne", null);
__decorate([
    (0, common_2.Patch)(':id'),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_accesorio_dto_1.UpdateAccesorioDto]),
    __metadata("design:returntype", void 0)
], AccesoriosController.prototype, "update", null);
__decorate([
    (0, common_2.Delete)(':id'),
    __param(0, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AccesoriosController.prototype, "remove", null);
exports.AccesoriosController = AccesoriosController = __decorate([
    (0, common_2.Controller)('accesorios'),
    (0, swagger_1.ApiTags)('accesorio'),
    __metadata("design:paramtypes", [accesorios_service_1.AccesoriosService])
], AccesoriosController);
//# sourceMappingURL=accesorios.controller.js.map