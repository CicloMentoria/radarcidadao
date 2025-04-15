import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ErrorComponent } from '../pages/error/error.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, ErrorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'combate';
}
