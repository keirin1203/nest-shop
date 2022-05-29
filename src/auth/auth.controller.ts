import { Body, Controller, Post } from '@nestjs/common';
import { createUserDto } from 'src/users/create-user.dto';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private AuthService: AuthService) {}

  @Post('login')
  async login(@Body() dto: LoginUserDto){
    return this.AuthService.login(dto)
  }

  @Post('registration')
  async registration(@Body() dto: createUserDto){
    return this.AuthService.registration(dto)
  }
}
