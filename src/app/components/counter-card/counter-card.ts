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
  @Input() icon: string =
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=group" />';
}
