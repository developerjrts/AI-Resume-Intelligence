import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private userModel;
    private readonly jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    signUp(createUserDto: CreateUserDto): Promise<{
        token: string;
        message: string;
    }>;
    signIn(loginUserDto: LoginUserDto): Promise<{
        message: string;
        token: string;
    }>;
}
