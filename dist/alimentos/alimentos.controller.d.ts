/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose" />
import { Request } from 'express';
import { AlimentosService } from './alimentos.service';
import { CreateAlimentoDto } from './dto/create-alimento.dto';
import { UpdateAlimentoDto } from './dto/update-alimento.dto';
export declare class AlimentosController {
    private readonly alimentosService;
    constructor(alimentosService: AlimentosService);
    create(createAlimentoDto: CreateAlimentoDto): Promise<import("./schemas/alimento.schema").Alimento>;
    findAll(request: Request): Promise<import("./schemas/alimento.schema").Alimento[]>;
    findOne(id: string): Promise<import("./schemas/alimento.schema").Alimento>;
    update(id: string, updateAlimentoDto: UpdateAlimentoDto): Promise<import("./schemas/alimento.schema").Alimento & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(id: string): Promise<import("./schemas/alimento.schema").Alimento & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
