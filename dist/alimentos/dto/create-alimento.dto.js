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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAlimentoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateAlimentoDto {
}
exports.CreateAlimentoDto = CreateAlimentoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Pedigree',
    }),
    __metadata("design:type", String)
], CreateAlimentoDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Alimento' }),
    __metadata("design:type", String)
], CreateAlimentoDto.prototype, "genre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Pedigree - Alimento Seco Perro Adulto Carne Y Vegetales',
    }),
    __metadata("design:type", String)
], CreateAlimentoDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Emprendedor 1' }),
    __metadata("design:type", String)
], CreateAlimentoDto.prototype, "author", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 12 }),
    __metadata("design:type", Number)
], CreateAlimentoDto.prototype, "pages", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://laikapp.s3.amazonaws.com/dev_images_categories/PEDIGREE_LOGO_CIRCULO5.png',
    }),
    __metadata("design:type", String)
], CreateAlimentoDto.prototype, "image_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['Alimento', 'Adulto', '12'] }),
    __metadata("design:type", Array)
], CreateAlimentoDto.prototype, "keywords", void 0);
//# sourceMappingURL=create-alimento.dto.js.map