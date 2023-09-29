/// <reference types="mongoose/types/pipelinestage" />
import { Document } from 'mongoose';
export type AlimentoDocument = Alimento & Document;
export declare class Alimento {
    title: string;
    category: string;
    subcategory: string;
    description: string;
    price: number;
    asociado: string;
    image_url: string;
    keywords: string[];
}
export declare const AlimentoSchema: import("mongoose").Schema<Alimento, import("mongoose").Model<Alimento, any, any, any>, any, any>;
