/// <reference types="mongoose/types/pipelinestage" />
import { Document } from 'mongoose';
export type ComunidadDocument = Comunidad & Document;
export declare class Comunidad {
    genre: string;
    description: string;
    author: string;
    pages: number;
    image_url: string;
    keywords: string[];
}
export declare const ComunidadSchema: import("mongoose").Schema<Comunidad, import("mongoose").Model<Comunidad, any, any, any>, any, any>;
