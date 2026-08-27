import type { Response } from "express";
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
export declare class UserController {
    private readonly userService;
    private readonly configService;
    constructor(userService: UserService, configService: ConfigService);
    signUp(createUserDto: CreateUserDto, res: Response): Promise<{
        message: string;
    }>;
    signIn(loginUserDto: LoginUserDto, res: Response): Promise<{
        message: string;
    }>;
    gitHubAuth(): Promise<void>;
    githubCallback(req: any, res: Response): Promise<void>;
}
