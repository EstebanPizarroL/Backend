import { Request } from 'express';
import { ServiciosService } from './servicios.service';
export declare class ServiciosController {
    private readonly serviciosService;
    constructor(serviciosService: ServiciosService);
    findAll(request: Request): string;
}
