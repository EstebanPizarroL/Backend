/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose" />
import { Request } from 'express';
import { AccesoriosService } from './accesorios.service';
import { CreateAccesorioDto } from './dto/create-accesorio.dto';
import { UpdateAccesorioDto } from './dto/update-accesorio.dto';
export declare class AccesoriosController {
    private readonly accesoriosService;
    constructor(accesoriosService: AccesoriosService);
    create(createAccesorioDto: CreateAccesorioDto): Promise<import("./schemas/accesorios.schema").Accesorio>;
    findAll(request: Request): Promise<import("./schemas/accesorios.schema").Accesorio[]> | "Modulo de Accesorios";
    findOne(id: string): Promise<import("./schemas/accesorios.schema").Accesorio>;
    update(id: string, updateAccesorioDto: UpdateAccesorioDto): Promise<import("./schemas/accesorios.schema").Accesorio & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(id: string): Promise<import("./schemas/accesorios.schema").Accesorio & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
