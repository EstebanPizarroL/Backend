/// <reference types="mongoose/types/pipelinestage" />
import { Document } from 'mongoose';
export type AccesorioDocument = Accesorio & Document;
export declare class Accesorio {
    genre: string;
    description: string;
    author: string;
    pages: number;
    image_url: string;
    keywords: string[];
}
export declare const AccesorioSchema: import("mongoose").Schema<Accesorio, import("mongoose").Model<Accesorio, any, any, any>, any, any>;
