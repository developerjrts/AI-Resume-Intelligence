import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-github2";

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, "github") {

    constructor() {
        super({
            clientID: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
            callbackURL: `https://ai-resume-intelligence-5jm4.onrender.com/user/github/callback`,
            scope: ["user:email"],
            userAgent: "AI-Resume-Intelligence"
        });
    };

    async validate(accessToken: string, refreshToken: string, profile: any, done: Function) {
        const json = profile._json

        const user = {
            githubId: json.id,
            name: json.name,
            username: json.login,
            email: json.email,
            avatar: json.avatar_url,
            isVerified: true,
        };

       return done(null, user, accessToken)
    }

}


