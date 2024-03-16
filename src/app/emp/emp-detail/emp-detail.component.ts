import { Component, Input } from '@angular/core';

@Component({
  selector: '[employee-detail]',
  templateUrl: './emp-detail.component.html',
  styleUrl: './emp-detail.component.css',
})
export class EmpDetailComponent {
  @Input()
  employee: any;
}
