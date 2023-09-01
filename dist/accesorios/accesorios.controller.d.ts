import { Request } from 'express';
import { AccesoriosService } from './accesorios.service';
export declare class AccesoriosController {
    private readonly accesoriosService;
    constructor(accesoriosService: AccesoriosService);
    findAll(request: Request): string;
}
