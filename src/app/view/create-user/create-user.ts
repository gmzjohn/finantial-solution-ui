import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackButton } from '../../components/back-button/back-button';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-user',
  imports: [ReactiveFormsModule, BackButton],
  templateUrl: './create-user.html',
  styleUrls: ['./create-user.css'],
})
export class CreateUser {
  private userService = inject(UserService);
  private router = inject(Router);

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.userForm.valid) {
      this.userService.addUser({
        name: this.userForm.value.name!,
        email: this.userForm.value.email!,
        role: this.userForm.value.role!,
      });
      this.router.navigate(['/users']);
    }
  }
}
