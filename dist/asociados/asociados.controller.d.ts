/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose" />
import { Request } from 'express';
import { AsociadosService } from './asociados.service';
import { CreateAsociadoDto } from './dto/create-asociado.dto';
import { UpdateAsociadoDto } from './dto/update-asociado.dto';
export declare class AsociadosController {
    private readonly asociadosService;
    constructor(asociadosService: AsociadosService);
    create(createLocalDto: CreateAsociadoDto): Promise<import("./schemas/asociados.schema").Asociado>;
    findAll(request: Request): Promise<import("./schemas/asociados.schema").Asociado[]>;
    findOne(id: string): Promise<import("./schemas/asociados.schema").Asociado>;
    update(id: string, updateAsociadoDto: UpdateAsociadoDto): Promise<import("./schemas/asociados.schema").Asociado & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(id: string): Promise<import("./schemas/asociados.schema").Asociado & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
