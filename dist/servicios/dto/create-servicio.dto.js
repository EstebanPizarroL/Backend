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
exports.CreateServicioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateServicioDto {
}
exports.CreateServicioDto = CreateServicioDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Pedigree',
    }),
    __metadata("design:type", String)
], CreateServicioDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ropa' }),
    __metadata("design:type", String)
], CreateServicioDto.prototype, "genre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Abrigo',
    }),
    __metadata("design:type", String)
], CreateServicioDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Emprendedor 1' }),
    __metadata("design:type", String)
], CreateServicioDto.prototype, "author", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], CreateServicioDto.prototype, "pages", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://laikapp.s3.amazonaws.com/dev_images_categories/PEDIGREE_LOGO_CIRCULO5.png',
    }),
    __metadata("design:type", String)
], CreateServicioDto.prototype, "image_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['Ropa', 'Cachorro', '1'] }),
    __metadata("design:type", Array)
], CreateServicioDto.prototype, "keywords", void 0);
//# sourceMappingURL=create-servicio.dto.js.map