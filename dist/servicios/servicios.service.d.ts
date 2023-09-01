/// <reference types="mongoose/types/pipelinestage" />
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
import { Servicio, ServicioDocument } from './schemas/servicios.schema';
import { Model } from 'mongoose';
import { Request } from 'express';
export declare class ServiciosService {
    private readonly servicioModel;
    constructor(servicioModel: Model<ServicioDocument>);
    create(createServicioDto: CreateServicioDto): Promise<Servicio>;
    findAll(request: Request): Promise<Servicio[]>;
    findOne(id: string): Promise<Servicio>;
    update(id: string, updateServicioDto: UpdateServicioDto): Promise<Servicio & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(id: string): Promise<Servicio & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
