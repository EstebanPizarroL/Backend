/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose" />
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./schemas/user.schema").User>;
    findAll(): Promise<import("./schemas/user.schema").User[]>;
    findOne(id: string): Promise<import("./schemas/user.schema").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./schemas/user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(id: string): Promise<import("./schemas/user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
