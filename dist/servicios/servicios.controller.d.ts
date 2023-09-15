/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose" />
import { Request } from 'express';
import { ServiciosService } from './servicios.service';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
export declare class ServiciosController {
    private readonly serviciosService;
    constructor(serviciosService: ServiciosService);
    create(createServicioDto: CreateServicioDto): Promise<import("./schemas/servicios.schema").Servicio>;
    findAll(request: Request): Promise<import("./schemas/servicios.schema").Servicio[]>;
    findOne(id: string): Promise<import("./schemas/servicios.schema").Servicio>;
    update(id: string, updateServicioDto: UpdateServicioDto): Promise<import("./schemas/servicios.schema").Servicio & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(id: string): Promise<import("./schemas/servicios.schema").Servicio & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
