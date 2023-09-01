/// <reference types="mongoose/types/pipelinestage" />
import { CreateComunidadDto } from './dto/create-comunidad.dto';
import { UpdateComunidadDto } from './dto/update-comunidad.dto';
import { Comunidad, ComunidadDocument } from './schemas/comunidades.schema';
import { Model } from 'mongoose';
import { Request } from 'express';
export declare class ComunidadesService {
    private readonly comunidadModel;
    constructor(comunidadModel: Model<ComunidadDocument>);
    create(createComunidadDto: CreateComunidadDto): Promise<Comunidad>;
    findAll(request: Request): Promise<Comunidad[]>;
    findOne(id: string): Promise<Comunidad>;
    update(id: string, updateComunidadDto: UpdateComunidadDto): Promise<Comunidad & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(id: string): Promise<Comunidad & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
