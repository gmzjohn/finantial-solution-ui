import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from '../../view/home/home';
import { Users } from '../../view/users/users';

type View = 'home' | 'users';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, Home, Users],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  currentView: View = 'home';

  setCurrentView(view: View) {
    this.currentView = view;
  }
}
