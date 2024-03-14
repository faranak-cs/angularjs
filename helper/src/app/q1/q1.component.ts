import { Component, inject } from '@angular/core';
import { RestService } from '../rest.service';
import { User } from '../user';
import { Company } from '../company';
import { JsonPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-q1',
  standalone: true,
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './q1.component.html',
  styleUrl: './q1.component.css',
})
export class Q1Component {
  users!: User[];
  companies!: Company[];
  user!: User;
  id: string = '0';

  restService = inject(RestService);

  constructor() {}
  onClickUsers() {
    this.restService.getUsers().subscribe((res) => {
      this.users = res;
    });
  }
  onClickCompanies() {
    this.restService.getCompanies().subscribe((res) => {
      this.companies = res;
    });
  }
  onKeyUp(event: Event) {
    this.id = (event.target as HTMLInputElement).value;
  }
  onClickUser() {
    this.restService.getUser(this.id).subscribe((res) => {
      this.user = res;
    });
  }
}
