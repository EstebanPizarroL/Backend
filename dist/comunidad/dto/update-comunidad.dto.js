"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateComunidadDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_comunidad_dto_1 = require("./create-comunidad.dto");
class UpdateComunidadDto extends (0, swagger_1.PartialType)(create_comunidad_dto_1.CreateComunidadDto) {
}
exports.UpdateComunidadDto = UpdateComunidadDto;
//# sourceMappingURL=update-comunidad.dto.js.map