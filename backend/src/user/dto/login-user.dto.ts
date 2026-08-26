import { IsLowercase, IsNotEmpty, IsString } from "class-validator";

export class LoginUserDto {

    @IsLowercase()
    @IsNotEmpty()
    username!: string;

    @IsNotEmpty()
    @IsString()
    password!: string;

}
