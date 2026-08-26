import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import type { Response } from "express";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    signUp(createUserDto: CreateUserDto, res: Response): Promise<{
        message: string;
    }>;
    signIn(loginUserDto: LoginUserDto, res: Response): Promise<{
        message: string;
    }>;
}
