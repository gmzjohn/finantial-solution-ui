import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table } from '../../components/table/table';
import { Column } from '../../components/table/types';
import { RouterLink } from '@angular/router';
import { UserService, User } from '../../services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, Table, RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  private userService = inject(UserService);
  title = 'User List';

  userColumns: Column<User>[] = [
    { header: 'ID', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { header: 'Role', accessor: 'role' },
  ];

  userData = this.userService.getUsers();
}
