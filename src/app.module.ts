import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AsociadosModule } from './asociados/asociados.module';
import { AlimentosModule } from './alimentos/alimentos.module';
import { AccesoriosModule } from './accesorios/accesorios.module';
import { ServiciosModule } from './servicios/servicios.module';
import { ComunidadesModule } from './comunidad/comunidades.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://estebanpi1976:estebanpi1976@cluster0.c6tswxz.mongodb.net/tutorialdb?retryWrites=true&w=majority',
    ),
    AsociadosModule,
    AlimentosModule,
    AccesoriosModule,
    ServiciosModule,
    ComunidadesModule,
    //BooksModule,
    UsersModule
  ],
  //controllers: [AppController],
  //providers: [AppService],
  controllers: [],
  providers: [],
})
export class AppModule {}
