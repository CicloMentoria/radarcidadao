import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-error',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
  standalone: true,
})
export class ErrorComponent {

}
