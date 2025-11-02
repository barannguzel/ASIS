import { Component, Input, HostBinding } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.html',
  styleUrls: ['./loading-bar.scss'],
})
export class LoadingBarComponent {
  @Input() label = 'Yükleniyor...';
  @Input() progress: number | null = null;
  @Input() indeterminate = false;
  @Input() height = 8;
  @Input() barColor = '#203f86';
  @Input() trackColor = '#e5e7eb';
  @Input() radius = 8;
  @HostBinding('style.display') display = 'block';

  get clamped(): number {
    const v = this.progress ?? 0;
    return Math.max(0, Math.min(100, v));
  }
}
