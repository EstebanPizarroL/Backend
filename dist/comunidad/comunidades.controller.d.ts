import { Request } from 'express';
import { ComunidadesService } from './comunidades.service';
export declare class ComunidadesController {
    private readonly comunidadesService;
    constructor(comunidadesService: ComunidadesService);
    findAll(request: Request): string;
}
