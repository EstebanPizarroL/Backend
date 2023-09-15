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
exports.AlimentosController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const alimentos_service_1 = require("./alimentos.service");
const create_alimento_dto_1 = require("./dto/create-alimento.dto");
const update_alimento_dto_1 = require("./dto/update-alimento.dto");
let AlimentosController = exports.AlimentosController = class AlimentosController {
    constructor(alimentosService) {
        this.alimentosService = alimentosService;
    }
    create(createAlimentoDto) {
        return this.alimentosService.create(createAlimentoDto);
    }
    findAll(request) {
        return this.alimentosService.findAll(request);
    }
    findOne(id) {
        return this.alimentosService.findOne(id);
    }
    update(id, updateAlimentoDto) {
        return this.alimentosService.update(id, updateAlimentoDto);
    }
    remove(id) {
        return this.alimentosService.remove(id);
    }
};
__decorate([
    (0, common_2.Post)(),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_alimento_dto_1.CreateAlimentoDto]),
    __metadata("design:returntype", void 0)
], AlimentosController.prototype, "create", null);
__decorate([
    (0, common_2.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AlimentosController.prototype, "findAll", null);
__decorate([
    (0, common_2.Get)(':id'),
    __param(0, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AlimentosController.prototype, "findOne", null);
__decorate([
    (0, common_2.Patch)(':id'),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_alimento_dto_1.UpdateAlimentoDto]),
    __metadata("design:returntype", void 0)
], AlimentosController.prototype, "update", null);
__decorate([
    (0, common_2.Delete)(':id'),
    __param(0, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AlimentosController.prototype, "remove", null);
exports.AlimentosController = AlimentosController = __decorate([
    (0, common_2.Controller)('alimentos'),
    (0, swagger_1.ApiTags)('alimento'),
    __metadata("design:paramtypes", [alimentos_service_1.AlimentosService])
], AlimentosController);
//# sourceMappingURL=alimentos.controller.js.map