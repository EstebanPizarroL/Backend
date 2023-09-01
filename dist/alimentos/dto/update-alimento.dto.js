"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAlimentoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_alimento_dto_1 = require("./create-alimento.dto");
class UpdateAlimentoDto extends (0, swagger_1.PartialType)(create_alimento_dto_1.CreateAlimentoDto) {
}
exports.UpdateAlimentoDto = UpdateAlimentoDto;
//# sourceMappingURL=update-alimento.dto.js.map