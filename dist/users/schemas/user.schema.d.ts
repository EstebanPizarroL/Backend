/// <reference types="mongoose/types/pipelinestage" />
import { Document } from 'mongoose';
export type UserDocument = User & Document;
export declare class User {
    _id: string;
    name: string;
    email: string;
    country: string;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any>, any, any>;
