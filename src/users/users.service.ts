import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(private prismaService: PrismaService){}

    async createUser(createUserDTO: CreateUserDTO){
        console.log('createUserDTo', createUserDTO)
        return this.prismaService.user.create({data: createUserDTO})
    }
}
