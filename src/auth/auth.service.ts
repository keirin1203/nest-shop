import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { createUserDto } from 'src/users/create-user.dto';
import { UserService } from 'src/users/users.service';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs'
import { User } from 'src/users/models/user.model';

@Injectable()
export class AuthService {
  constructor(
    private UserService: UserService,
    private JwtService: JwtService){}

  async login(dto: LoginUserDto) {

  }

  async registration(dto: createUserDto) {
    const candidate = await this.UserService.getUserByEmail(dto.email);

    if (candidate) {
      throw new HttpException('Пользователь с таким Email уже существует!', HttpStatus.BAD_REQUEST)
    }

    const hashPassword = await bcrypt.hash(dto.password, 5)
    const user = await this.UserService.createUser({...dto, password: hashPassword})

    return this.generateToken(user)
  }

  async generateToken(user: User) {
    return {
      token: this.JwtService.sign({email: user.email, id: user.id})
    }
  }
}
