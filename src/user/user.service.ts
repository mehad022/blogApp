// user.service.ts
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  //user registration
  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async findByUsername(name: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { name } });
    return user;
  }

  async findById(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    return user;
  }
}
