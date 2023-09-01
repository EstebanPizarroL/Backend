import { PartialType } from '@nestjs/swagger';
import { CreateAsociadoDto } from './create-asociado.dto';

export class UpdateAsociadoDto extends PartialType(CreateAsociadoDto) {}
