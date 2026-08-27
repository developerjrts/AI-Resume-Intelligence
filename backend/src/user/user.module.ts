import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PassportModule } from '@nestjs/passport';
import { GithubStrategy } from './strategies/github.strategy';

@Module({
  imports: [
  MongooseModule.forFeature([{
    name: User.name,
    schema: UserSchema
  }]),
  JwtModule.registerAsync({
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      secret: configService.get<string>('JWT_SECRET'),
      signOptions: {
        expiresIn: '1m'
      }
    })
  }),
  PassportModule.registerAsync({
    imports: [ConfigModule],
    useFactory: async(configService: ConfigService) => ({
      defaultStrategy: "jwt"
    }),
    inject: [ConfigService]
  })
],

  controllers: [UserController],
  providers: [
    UserService,
    GithubStrategy
  ]
})
export class UserModule {}
