import { Injectable } from '@nestjs/common';
import { createUserDto } from 'src/users/create-user.dto';
import { UserService } from 'src/users/users.service';
import { LoginUserDto } from './login-user.dto';

@Injectable()
export class AuthService {
  constructor(private UserService: UserService){
  }

  login(dto: LoginUserDto) {

  }

  registration(dto: createUserDto) {
    
  }
}
