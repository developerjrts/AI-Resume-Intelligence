import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import type { Response } from "express";
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly configService: ConfigService,
    ) {}

    @Post("sign-up")
    @HttpCode(HttpStatus.CREATED)
    @UsePipes(new ValidationPipe({whitelist: true}))
    async signUp(
        @Body() createUserDto: CreateUserDto,
        @Res({ passthrough: true }) res: Response
    ) {
        const {token, message} = await this.userService.signUp(createUserDto)

        res.cookie("session_code", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production" ? true : false,
            sameSite: 'lax',
            maxAge: 30 * 24 * 60 * 60 * 1000
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

         res.cookie("session_code", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production" ? true : false,
            sameSite: 'lax',
            maxAge: 30 * 24 * 60 * 60 * 1000
        })

        return {
            message
        }
    }

    @Get("github")
    @UseGuards(AuthGuard("github"))
    async gitHubAuth()  {}


    @Get("github/callback")
    @UseGuards(AuthGuard("github"))
    async githubCallback(
        @Req() req: any,
        @Res({passthrough: true}) res: Response 
    )  {

        const result = await this.userService.githubCallback(req.user);

         res.cookie("session_code", result.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production" ? true : false,
            sameSite: 'none',
            maxAge: 30 * 24 * 60 * 60 * 1000
        })

        const frontendUrl = this.configService.getOrThrow<string>("FRONTEND_URL");

        return res.redirect(`${frontendUrl}/dashboard`)
    }


}
