import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createUserDto } from './create-user.dto';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private UserService: UserService) {
  }

  @Get(':id')
  getOneUser(@Param() id) {
    return this.UserService.getOneUser(id)
  }

  @Post()
  createUser(@Body() dto: createUserDto) { 
    return this.UserService.createUser(dto)
  }
}
