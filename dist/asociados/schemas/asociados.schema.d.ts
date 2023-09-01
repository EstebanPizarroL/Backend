/// <reference types="mongoose/types/pipelinestage" />
import { Document } from 'mongoose';
export type AsociadoDocument = Asociado & Document;
export declare class Asociado {
    genre: string;
    description: string;
    author: string;
    pages: number;
    image_url: string;
    keywords: string[];
}
export declare const AsociadoSchema: import("mongoose").Schema<Asociado, import("mongoose").Model<Asociado, any, any, any>, any, any>;
