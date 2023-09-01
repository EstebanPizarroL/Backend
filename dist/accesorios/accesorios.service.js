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
exports.AccesoriosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const accesorios_schema_1 = require("./schemas/accesorios.schema");
const mongoose_2 = require("mongoose");
let AccesoriosService = exports.AccesoriosService = class AccesoriosService {
    constructor(accesorioModel) {
        this.accesorioModel = accesorioModel;
    }
    async create(createAccesorioDto) {
        return this.accesorioModel.create(createAccesorioDto);
    }
    async findAll(request) {
        return this.accesorioModel
            .find(request.query)
            .setOptions({ sanitizeFilter: true })
            .exec();
    }
    async findOne(id) {
        return this.accesorioModel.findOne({ _id: id }).exec();
    }
    async update(id, updateAccesorioDto) {
        return this.accesorioModel.findOneAndUpdate({ _id: id }, updateAccesorioDto, { new: true });
    }
    async remove(id) {
        return this.accesorioModel.findByIdAndRemove({ _id: id }).exec();
    }
};
exports.AccesoriosService = AccesoriosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(accesorios_schema_1.Accesorio.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AccesoriosService);
//# sourceMappingURL=accesorios.service.js.map