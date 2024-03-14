import { Component, inject } from '@angular/core';
import { Company } from '../company';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-q3',
  standalone: true,
  imports: [],
  templateUrl: './q3.component.html',
  styleUrl: './q3.component.css',
})
export class Q3Component {
  companies: Company[] = [];
  newCompany: Company = { name: 'Overstock' };
  oldCompany: string = '';

  restService = inject(RestService);

  constructor() {
    this.restService.getCompanies().subscribe((res) => {
      this.companies = res;
    });
  }

  handleAdd() {
    this.restService.addCompany(this.newCompany).subscribe((res) => {
      console.log(res);
    });
  }
  handleDelete() {
    this.restService.deleteCompany(this.oldCompany).subscribe((res) => {
      console.log(res);
    });
  }
}
