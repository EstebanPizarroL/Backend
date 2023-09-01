import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AsociadosModule } from './asociados/asociados.module';
import { AlimentosModule } from './alimentos/alimentos.module';
import { AccesoriosModule } from './accesorios/accesorios.module';
import { ServiciosModule } from './servicios/servicios.module';
import { ComunidadesModule } from './comunidad/comunidades.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar títulos de documnentación
  /*const options = new DocumentBuilder()
    .setTitle('@petZone')
    .setDescription('API REST para ecommerce @petZone')
    .setVersion('1.0')
    .setContact(
      'Valentina Luza y/o Esteban Pizarro',
      'www.google.com',
      'contacto@petzone.com',
    )
    .build();
  const document = SwaggerModule.createDocument(app, options);

  // La ruta en que se sirve la documentación
  SwaggerModule.setup('docs', app, document);

  */

  const documentBuilderServicios = new DocumentBuilder()
  .setTitle('@petZone')
  .setDescription('API REST para ecommerce @petZone')
  .setVersion('1.0')
  .setContact(
    'Valentina Luza y/o Esteban Pizarro',
    'www.google.com',
    'contacto@petzone.com',
  )
  .build();

const documentServicios = SwaggerModule.createDocument(app, documentBuilderServicios, {
  include: [ ServiciosModule ]
});

  const documentBuilderAsociados = new DocumentBuilder()
    .setTitle('@petZone')
    .setDescription('API REST para ecommerce @petZone')
    .setVersion('1.0')
    .setContact(
      'Valentina Luza y/o Esteban Pizarro',
      'www.google.com',
      'contacto@petzone.com',
    )
    .build();

  const documentAsociados = SwaggerModule.createDocument(app, documentBuilderAsociados, {
    include: [ AsociadosModule ]
  });

  const documentBuilderAlimentos = new DocumentBuilder()
    .setTitle('@petZone')
    .setDescription('API REST para ecommerce @petZone')
    .setVersion('1.0')
    .setContact(
      'Valentina Luza y/o Esteban Pizarro',
      'www.google.com',
      'contacto@petzone.com',
    )
    .build();

  const documentAlimentos = SwaggerModule.createDocument(app, documentBuilderAlimentos, {
    include: [ AlimentosModule ]
  });
  
  const documentBuilderAccesorios = new DocumentBuilder()
    .setTitle('@petZone')
    .setDescription('API REST para ecommerce @petZone')
    .setVersion('1.0')
    .setContact(
      'Valentina Luza y/o Esteban Pizarro',
      'www.google.com',
      'contacto@petzone.com',
    )
    .build();

  const documentAccesorios = SwaggerModule.createDocument(app, documentBuilderAccesorios, {
    include: [ AccesoriosModule ]
  });
  
  const documentBuilderComunidades = new DocumentBuilder()
  .setTitle('@petZone')
  .setDescription('API REST para ecommerce @petZone')
  .setVersion('1.0')
  .setContact(
    'Valentina Luza y/o Esteban Pizarro',
    'www.google.com',
    'contacto@petzone.com',
  )
  .build();

const documentComunidades = SwaggerModule.createDocument(app, documentBuilderComunidades, {
  include: [ ComunidadesModule ]
});

  SwaggerModule.setup('docs-asociados', app, documentAsociados);

  SwaggerModule.setup('docs-servicios', app, documentServicios);
  
  SwaggerModule.setup('docs-alimentos', app, documentAlimentos);

  SwaggerModule.setup('docs-accesorios', app, documentAccesorios);
  
  SwaggerModule.setup('docs-comunidades', app, documentComunidades);

  /*
// CONFIGURACION DEL SWAGGER
  let documentBuilderAutos = new DocumentBuilder()
    .setTitle("Documentacion de la API - Autos")
    .setDescription("Descripcion de la API")
    .setVersion('0.0.1')
    .setContact("Jorge Parra", "http://google.com", "jorge.parra@gmail.com")
    .build();

  let documentBuilderJuguetes = new DocumentBuilder()
    .setTitle("Documentacion de la API - Juguetes")
    .setDescription("Descripcion de la API")
    .setVersion('0.0.1')
    .setContact("Jorge Parra", "http://google.com", "jorge.parra@gmail.com")
    .build();

  const documentAutos = SwaggerModule.createDocument(app, documentBuilderAutos, {
    include: [ CarsModule ]
  });
  const documentJuguetes = SwaggerModule.createDocument(app, documentBuilderJuguetes, {
    include: [ ToysModule ]
  });

  SwaggerModule.setup('docs/autos', app, documentAutos);
  SwaggerModule.setup('docs/juguetes', app, documentJuguetes);


*/
  await app.listen(3000);
}
bootstrap();
