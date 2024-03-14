import { Component, inject } from '@angular/core';
import { User } from '../user';
import { RestService } from '../rest.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-q2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './q2.component.html',
  styleUrl: './q2.component.css',
})
export class Q2Component {
  users: User[] = [];
  usersFiltered: User[] = [];
  sliderValue: number = 10;

  restService = inject(RestService);

  constructor() {
    this.restService.getUsers().subscribe((res) => {
      this.users = res;
      this.filterUsers(this.sliderValue);
    });
  }

  filterUsers(value: number): void {
    this.usersFiltered = this.users.filter((item) => item.rank <= value);
  }
}
