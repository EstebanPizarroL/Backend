/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose" />
import { Request } from 'express';
import { ComunidadesService } from './comunidades.service';
import { CreateComunidadDto } from './dto/create-comunidad.dto';
import { UpdateComunidadDto } from './dto/update-comunidad.dto';
export declare class ComunidadesController {
    private readonly comunidadesService;
    constructor(comunidadesService: ComunidadesService);
    create(createComunidadDto: CreateComunidadDto): Promise<import("./schemas/comunidades.schema").Comunidad>;
    findAll(request: Request): Promise<import("./schemas/comunidades.schema").Comunidad[]>;
    findOne(id: string): Promise<import("./schemas/comunidades.schema").Comunidad>;
    update(id: string, updateComunidadDto: UpdateComunidadDto): Promise<import("./schemas/comunidades.schema").Comunidad & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(id: string): Promise<import("./schemas/comunidades.schema").Comunidad & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
