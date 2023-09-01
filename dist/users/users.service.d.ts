/// <reference types="mongoose/types/pipelinestage" />
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(id: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
