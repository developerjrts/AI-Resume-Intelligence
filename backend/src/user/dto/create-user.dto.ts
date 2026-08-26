import { IsEmail, IsEnum, IsLowercase, IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateUserDto {

    @IsNotEmpty()
    name!: string

    @IsEmail()
    @IsNotEmpty()
    email!: string

    @IsLowercase()
    @IsNotEmpty()
    username!: string

    @IsNotEmpty()
    @IsString()
    @MinLength(6, {
        message: "Password must contain 6 characters!"
    })
    password!: string

}
