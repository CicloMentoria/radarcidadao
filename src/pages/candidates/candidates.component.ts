import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cadidates',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './candidates.component.html',
  styleUrl: './candidates.component.scss'
})
export class CadidatesComponent {

}
