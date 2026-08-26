import { Body, Controller, HttpCode, HttpStatus, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import type { Response } from "express"

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post("sign-up")
    @HttpCode(HttpStatus.CREATED)
    @UsePipes(new ValidationPipe({whitelist: true}))
    async signUp(
        @Body() createUserDto: CreateUserDto,
        @Res({ passthrough: true }) res: Response
    ) {
        const {token, message} = await this.userService.signUp(createUserDto)

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production" ? true : false,
            sameSite: 'lax'
        })

        return {
            message
        }
    }

    @Post("sign-in")
    @HttpCode(HttpStatus.OK)
    @UsePipes(new ValidationPipe({whitelist: true}))
    async signIn(
        @Body() loginUserDto: LoginUserDto,
        @Res({ passthrough: true }) res: Response
    ) {
        const {token, message} = await this.userService.signIn(loginUserDto)

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production" ? true : false,
            sameSite: 'lax'
        })

        return {
            message
        }
    }


}
