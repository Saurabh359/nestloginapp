import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        email: 'john12@gmail.com',
        password: 'pass',
      },
      {
        userId: 2,
        username: 'chris',
        email: 'chris12@gmail.com',
        password: 'pass',
      },
      {
        userId: 3,
        username: 'maria',
        email: 'maria12@gmail.com',
        password: 'pass',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}