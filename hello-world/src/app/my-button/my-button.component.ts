import { Component } from '@angular/core';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css',
})
export class MyButtonComponent {
  onClick() {
    console.log('Clicked me');
  }
  onKeyUp(event: Event) {
    console.log(event);
    console.log((event.target as HTMLInputElement).value);
  }

  onChange(event: Event) {
    console.log((event.target as HTMLSelectElement).value);
  }
}
