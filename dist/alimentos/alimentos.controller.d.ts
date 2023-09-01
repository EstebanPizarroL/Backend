import { Request } from 'express';
import { AlimentosService } from './alimentos.service';
export declare class AlimentosController {
    private readonly alimentosService;
    constructor(alimentosService: AlimentosService);
    findAll(request: Request): string;
}
