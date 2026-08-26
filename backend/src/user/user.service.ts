import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from "bcrypt"
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {

    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        private readonly jwtService: JwtService
    ){}

    async signUp(createUserDto: CreateUserDto) {

        const {email, username, password} = createUserDto

        const isEmailExists = await this.userModel.findOne({email});

        if (isEmailExists) {
            throw new ConflictException("User with this email already exists.")
        }

        const isUsernameExists = await this.userModel.findOne({username});

        if (isUsernameExists) {
            throw new ConflictException("User with this username already exists.")
        }

        const salt = 10
        const hashPassword = await bcrypt.hash(password, salt);

        const newUser = new this.userModel({
            ...createUserDto,
            password: hashPassword
        })

        await newUser.save()

        const payload = {
            sub: newUser._id,
            username: newUser.username
        };

        const token = await this.jwtService.signAsync(payload)


        return {token, message: "User created"};
    }

    async signIn(loginUserDto: LoginUserDto) {

        const {username, password} = loginUserDto

        const user = await this.userModel.findOne({username}).select("+password");

        if (!user) {
            throw new UnauthorizedException("Invalid username");
        }

        if (!user.password) {
            throw new UnauthorizedException("Invalid username or password");
        }
        
        const comparePassword = await bcrypt.compare(password, user.password);

        if (!comparePassword) {
            throw new UnauthorizedException("Invalid username or password");
        }

         const payload = {
            sub: user._id,
            username: user.username
        };

        const token = await this.jwtService.signAsync(payload)


        return {
            message: "Logged In",
            token
        }

    }

}
