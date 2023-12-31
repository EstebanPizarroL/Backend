import { Module } from '@nestjs/common';
import { ServiciosService } from './servicios.service';
import { ServiciosController } from './servicios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Servicio, ServicioSchema } from './schemas/servicios.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Servicio.name, schema: ServicioSchema },
    ]),
  ],
  controllers: [ServiciosController],
  providers: [ServiciosService],
})
export class ServiciosModule {}
