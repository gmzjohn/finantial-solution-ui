import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table } from '../../components/table/table';
import { Column } from '../../components/table/types';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, Table],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  title = 'User List';
  
  userColumns: Column<User>[] = [
    { header: 'ID', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { header: 'Role', accessor: 'role' },
  ];

  userData: User[] = [
    { id: 1, name: 'User 1', email: 'user.one@example.com', role: 'Admin' },
    { id: 2, name: 'User 2', email: 'user.two@example.com', role: 'User' },
    { id: 3, name: 'User 3', email: 'user.three@example.com', role: 'Editor' },
    { id: 4, name: 'User 4', email: 'user.four@example.com', role: 'User' },
  ];
}
