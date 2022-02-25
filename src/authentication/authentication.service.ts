import { Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { UsersService } from '../users/user.service';

@Injectable()
export class AuthenticationService {
  constructor(private readonly usersService: UsersService) {}

  public async register(registrationData: RegisterDto) {
    const hashedPassword = await bcrypt.hash(registrationData.password, 10);
    try{
      const createdUser = await this.usersService.create({
        
      })
    }
  }
}
