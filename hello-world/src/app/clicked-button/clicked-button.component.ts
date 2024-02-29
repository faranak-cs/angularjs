import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-clicked-button',
  standalone: true,
  imports: [],
  templateUrl: './clicked-button.component.html',
  styleUrl: './clicked-button.component.css',
})
export class ClickedButtonComponent {
  // string
  // @Input() count = '';

  // number
  @Input({ transform: numberAttribute }) count = 0;

  onClick() {
    this.count++;
  }
}
