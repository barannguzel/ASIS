import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Header } from '../../components/header/header';
import { LoadingBarComponent } from '../../components/loading-bar/loading-bar';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, LoadingBarComponent],
  templateUrl: './user-detail-page.html',
  styleUrls: ['./user-detail-page.scss'],
})
export class UserDetailPage {
  private route = inject(ActivatedRoute);
  private userService = inject(UserService);
  private sanitizer = inject(DomSanitizer);

  isLoading = signal(true);
  error = signal<string | null>(null);
  user = signal<User | null>(null);

  name = computed(() => this.user()?.name ?? '');
  username = computed(() => this.user()?.username ?? '');

  lat = computed<number | null>(() => {
    const raw = this.user()?.address?.geo?.lat;
    const n = Number(raw);
    return Number.isFinite(n) ? n : null;
  });

  lng = computed<number | null>(() => {
    const raw = this.user()?.address?.geo?.lng;
    const n = Number(raw);
    return Number.isFinite(n) ? n : null;
  });

  mapUrl = computed<SafeResourceUrl | null>(() => {
    const lat = this.lat();
    const lng = this.lng();
    if (lat == null || lng == null) return null;
    const url = `https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  });
  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id || Number.isNaN(id)) {
      this.error.set('Geçersiz kullanıcı ID.');
      this.isLoading.set(false);
      return;
    }

    this.userService.getUserById(id).subscribe({
      next: (u) => this.user.set(u),
      error: () => this.error.set('Kullanıcı getirilemedi.'),
      complete: () => this.isLoading.set(false),
    });
  }
}
