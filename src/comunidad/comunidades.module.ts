import { Module } from '@nestjs/common';
import { ComunidadesService } from './comunidades.service';
import { ComunidadesController } from './comunidades.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comunidad, ComunidadSchema } from './schemas/comunidades.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Comunidad.name, schema: ComunidadSchema },
    ]),
  ],
  controllers: [ComunidadesController],
  providers: [ComunidadesService],
})
export class ComunidadesModule {}
