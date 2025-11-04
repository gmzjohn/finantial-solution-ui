import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type View = 'home' | 'users';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  currentView: View = 'home';

  setCurrentView(view: View) {
    this.currentView = view;
  }
}
