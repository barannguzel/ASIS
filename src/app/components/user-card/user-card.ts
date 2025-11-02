import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-card.html',
  styleUrls: ['./user-card.scss'],
})
export class UserCardComponent {
  @Input() id!: number;
  @Input() name = '';
  @Input() email = '';
  @Input() city = '';
  @Input() company = '';

  constructor(private router: Router) {}

  onView() {
    this.router.navigate(['/users', this.id]);
  }
}
