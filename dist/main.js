"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const users_module_1 = require("./users/users.module");
const asociados_module_1 = require("./asociados/asociados.module");
const alimentos_module_1 = require("./alimentos/alimentos.module");
const accesorios_module_1 = require("./accesorios/accesorios.module");
const servicios_module_1 = require("./servicios/servicios.module");
const comunidades_module_1 = require("./comunidad/comunidades.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const documentBuilderLogin = new swagger_1.DocumentBuilder()
        .setTitle('ZonaPet')
        .setDescription('API REST para ecommerce ZonaPet')
        .setVersion('1.0')
        .setContact('Valentina Luza y/o Esteban Pizarro', 'www.google.com', 'contacto@petzone.com')
        .build();
    const documentLogin = swagger_1.SwaggerModule.createDocument(app, documentBuilderLogin, {
        include: [users_module_1.UsersModule]
    });
    const documentBuilderServicios = new swagger_1.DocumentBuilder()
        .setTitle('ZonaPet')
        .setDescription('API REST para ecommerce ZonaPet')
        .setVersion('1.0')
        .setContact('Valentina Luza y/o Esteban Pizarro', 'www.google.com', 'contacto@petzone.com')
        .build();
    const documentServicios = swagger_1.SwaggerModule.createDocument(app, documentBuilderServicios, {
        include: [servicios_module_1.ServiciosModule]
    });
    const documentBuilderAsociados = new swagger_1.DocumentBuilder()
        .setTitle('ZonaPet')
        .setDescription('API REST para ecommerce ZonaPet')
        .setVersion('1.0')
        .setContact('Valentina Luza y/o Esteban Pizarro', 'www.google.com', 'contacto@petzone.com')
        .build();
    const documentAsociados = swagger_1.SwaggerModule.createDocument(app, documentBuilderAsociados, {
        include: [asociados_module_1.AsociadosModule]
    });
    const documentBuilderAlimentos = new swagger_1.DocumentBuilder()
        .setTitle('ZonaPet')
        .setDescription('API REST para ecommerce ZonaPet')
        .setVersion('1.0')
        .setContact('Valentina Luza y/o Esteban Pizarro', 'www.google.com', 'contacto@petzone.com')
        .build();
    const documentAlimentos = swagger_1.SwaggerModule.createDocument(app, documentBuilderAlimentos, {
        include: [alimentos_module_1.AlimentosModule]
    });
    const documentBuilderAccesorios = new swagger_1.DocumentBuilder()
        .setTitle('ZonaPet')
        .setDescription('API REST para ecommerce ZonaPet')
        .setVersion('1.0')
        .setContact('Valentina Luza y/o Esteban Pizarro', 'www.google.com', 'contacto@petzone.com')
        .build();
    const documentAccesorios = swagger_1.SwaggerModule.createDocument(app, documentBuilderAccesorios, {
        include: [accesorios_module_1.AccesoriosModule]
    });
    const documentBuilderComunidades = new swagger_1.DocumentBuilder()
        .setTitle('ZonaPet')
        .setDescription('API REST para ecommerce ZonaPet')
        .setVersion('1.0')
        .setContact('Valentina Luza y/o Esteban Pizarro', 'www.google.com', 'contacto@petzone.com')
        .build();
    const documentComunidades = swagger_1.SwaggerModule.createDocument(app, documentBuilderComunidades, {
        include: [comunidades_module_1.ComunidadesModule]
    });
    swagger_1.SwaggerModule.setup('docs-login', app, documentLogin);
    swagger_1.SwaggerModule.setup('docs-asociados', app, documentAsociados);
    swagger_1.SwaggerModule.setup('docs-servicios', app, documentServicios);
    swagger_1.SwaggerModule.setup('docs-alimentos', app, documentAlimentos);
    swagger_1.SwaggerModule.setup('docs-accesorios', app, documentAccesorios);
    swagger_1.SwaggerModule.setup('docs-comunidades', app, documentComunidades);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map