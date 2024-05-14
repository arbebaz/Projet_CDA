import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { UcfirstPipe } from '../../../pipes/ucfirst.pipe';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [DatePipe, UcfirstPipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  public myDate: number = Date.now();
}
