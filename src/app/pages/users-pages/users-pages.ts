import { Component, computed, inject, signal } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { SearchInputComponent } from '../../components/search-input/search-input';
import { UserCardComponent } from '../../components/user-card/user-card';
import { CounterCardComponent } from '../../components/counter-card/counter-card';
import { LoadingBarComponent } from '../../components/loading-bar/loading-bar';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    SearchInputComponent,
    UserCardComponent,
    CounterCardComponent,
    LoadingBarComponent,
  ],
  templateUrl: './users-pages.html',
  styleUrl: './users-pages.scss',
})
export class UsersPageComponent {
  placeholder = 'İsme göre ara...';
  private readonly userService = inject(UserService);

  users = signal<User[]>([]);
  isLoading = signal(true);
  error = signal<string | null>(null);
  query = signal<string>('');

  filteredUsers = computed(() => {
    const q = this.query().trim().toLowerCase();
    if (!q) return this.users();
    return this.users().filter((u) => u.name.toLowerCase().includes(q));
  });

  constructor() {
    this.userService.getUsers().subscribe({
      next: (data) => this.users.set(data),
      error: () => this.error.set('Kullanıcılar alınamadı.'),
      complete: () => setTimeout(() => this.isLoading.set(false), 800),
    });
  }

  handleSearch(query: string) {
    this.query.set(query ?? '');
  }

  trackById = (_: number, u: User) => u.id;
}
