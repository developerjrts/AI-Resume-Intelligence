import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {HydratedDocument} from "mongoose"

export type UserDocument = HydratedDocument<User>

export enum UserRole {
    USER = "user",
    ADMIN = "admin"
}

export enum AuthProvider {
    LOCAL = "local",
    GOOGLE = "google",
    GITHUB = "github"
}

@Schema({_id: false})
export class SocialLinks {

    @Prop()
    linkedin?: string

    @Prop()
    github?: string

    @Prop()
    portfolio?: string

    @Prop()
    twitter?: string

};

@Schema({
    timestamps: true,
    versionKey: false
})
export class User {

    @Prop({
        required: true,
        trim: true,
        minLength: 3,
        max: 100
    })
    name!: string;

    @Prop({
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    })
    email!: string;

    @Prop({
        unique: true,
        lowercase: true,
        trim: true,
        sparse: true
    })
    username?: string;

    @Prop()
    avatar?: string;

    @Prop({
        select: false
    })
    password?: string;

    @Prop({
        type: String,
        enum: Object.values(AuthProvider),
        default: AuthProvider.LOCAL
    })
    authProvider!: AuthProvider;

    @Prop({
        select: false
    })
    googleId?: string;

    @Prop({
        select: false
    })
    githubId?: string;

    @Prop({
        default: false
    })
    isVerified: boolean = false;

    @Prop({
        default: false
    })
    isActive: boolean = false;

    @Prop({
        default: false
    })
    isBanned: boolean = false;

    @Prop({
        type: String,
        enum: Object.values(UserRole),
        default: UserRole.USER
    })
    role!: UserRole

    @Prop({
        trim: true,
        maxLength: 500
    })
    bio?: string

    @Prop({
        type: SocialLinks
    })
    socialLinks?: SocialLinks

}

export const UserSchema = SchemaFactory.createForClass(User)