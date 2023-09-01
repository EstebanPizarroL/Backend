import { Module } from '@nestjs/common';
import { AsociadosService } from './asociados.service';
import { AsociadosController } from './asociados.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Asociado, AsociadoSchema } from './schemas/asociados.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Asociado.name, schema: AsociadoSchema },
    ]),
  ],
  controllers: [AsociadosController],
  providers: [AsociadosService],
})
export class AsociadosModule {}
