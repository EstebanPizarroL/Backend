/// <reference types="mongoose/types/pipelinestage" />
import { Document } from 'mongoose';
export type ServicioDocument = Servicio & Document;
export declare class Servicio {
    genre: string;
    description: string;
    author: string;
    pages: number;
    image_url: string;
    keywords: string[];
}
export declare const ServicioSchema: import("mongoose").Schema<Servicio, import("mongoose").Model<Servicio, any, any, any>, any, any>;
