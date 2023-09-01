/// <reference types="mongoose/types/pipelinestage" />
import { CreateAccesorioDto } from './dto/create-accesorio.dto';
import { UpdateAccesorioDto } from './dto/update-accesorio.dto';
import { Accesorio, AccesorioDocument } from './schemas/accesorios.schema';
import { Model } from 'mongoose';
import { Request } from 'express';
export declare class AccesoriosService {
    private readonly accesorioModel;
    constructor(accesorioModel: Model<AccesorioDocument>);
    create(createAccesorioDto: CreateAccesorioDto): Promise<Accesorio>;
    findAll(request: Request): Promise<Accesorio[]>;
    findOne(id: string): Promise<Accesorio>;
    update(id: string, updateAccesorioDto: UpdateAccesorioDto): Promise<Accesorio & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(id: string): Promise<Accesorio & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
