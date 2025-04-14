import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository){}
    create(newUser : CreateUserDto){
        return 'This action adds a new user';
    }

    findAll() : CreateUserDto[]{
        return this.userRepository.findAll();
    }
}
