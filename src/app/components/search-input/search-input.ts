import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './search-input.html',
  styleUrls: ['./search-input.scss'],
})
export class SearchInputComponent {
  @Input() placeholder = 'İsim veya soyisme göre ara...';
  @Input() ariaLabel = 'Kullanıcı arama';
  @Input() debounce = 250;

  @Output() search = new EventEmitter<string>();

  query = '';
  private timer: any;

  onChange() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.search.emit(this.query.trim()), this.debounce);
  }
}
