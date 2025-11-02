import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-card.html',
  styleUrls: ['./counter-card.scss'],
})
export class CounterCardComponent {
  @Input() title = 'Toplam Kullanıcı';
  @Input() value: number | string = 0;
  @Input() icon = 'group';
}
