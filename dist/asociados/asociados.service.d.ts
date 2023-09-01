/// <reference types="mongoose/types/pipelinestage" />
import { CreateAsociadoDto } from './dto/create-asociado.dto';
import { UpdateAsociadoDto } from './dto/update-asociado.dto';
import { Asociado, AsociadoDocument } from './schemas/asociados.schema';
import { Model } from 'mongoose';
import { Request } from 'express';
export declare class AsociadosService {
    private readonly asociadoModel;
    constructor(asociadoModel: Model<AsociadoDocument>);
    create(createAsociadoDto: CreateAsociadoDto): Promise<Asociado>;
    findAll(request: Request): Promise<Asociado[]>;
    findOne(id: string): Promise<Asociado>;
    update(id: string, updateAsociadoDto: UpdateAsociadoDto): Promise<Asociado & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(id: string): Promise<Asociado & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
