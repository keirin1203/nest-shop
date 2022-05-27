import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { createUserDto } from './create-user.dto';
import { User } from './models/user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userRepository: typeof User){}

  async getOneUser(id: string): Promise<User>{
    return this.userRepository.findOne({where: {id}})
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({where: {email}})
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll();
    return users;
  }

  async createUser(userData: createUserDto): Promise<User> {
    const newUser = this.userRepository.create(userData)
    return newUser
  }
}
