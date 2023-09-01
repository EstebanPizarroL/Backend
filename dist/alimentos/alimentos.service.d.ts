/// <reference types="mongoose/types/pipelinestage" />
import { CreateAlimentoDto } from './dto/create-alimento.dto';
import { UpdateAlimentoDto } from './dto/update-alimento.dto';
import { Alimento, AlimentoDocument } from './schemas/alimento.schema';
import { Model } from 'mongoose';
import { Request } from 'express';
export declare class AlimentosService {
    private readonly alimentoModel;
    constructor(alimentoModel: Model<AlimentoDocument>);
    create(createBookDto: CreateAlimentoDto): Promise<Alimento>;
    findAll(request: Request): Promise<Alimento[]>;
    findOne(id: string): Promise<Alimento>;
    update(id: string, updateAlimentoDto: UpdateAlimentoDto): Promise<Alimento & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(id: string): Promise<Alimento & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
