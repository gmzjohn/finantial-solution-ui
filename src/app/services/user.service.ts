import { Injectable, signal } from '@angular/core';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users = signal<User[]>([]);

  getUsers() {
    return this.users.asReadonly();
  }

  addUser(user: Omit<User, 'id'>) {
    const newUser = {
      ...user,
      id: this.users().length + 1,
    };
    this.users.update((users) => [...users, newUser]);
  }
}
