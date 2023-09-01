/// <reference types="mongoose/types/pipelinestage" />
import { Document } from 'mongoose';
export type AlimentoDocument = Alimento & Document;
export declare class Alimento {
    genre: string;
    description: string;
    author: string;
    pages: number;
    image_url: string;
    keywords: string[];
}
export declare const AlimentoSchema: import("mongoose").Schema<Alimento, import("mongoose").Model<Alimento, any, any, any>, any, any>;
