import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    UserModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: {
        expiresIn: '24h'
      }
    })
  ],
  exports: [
    AuthModule
  ]
})
export class AuthModule {}
