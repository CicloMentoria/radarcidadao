import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { RouterOutlet } from '@angular/router';
import { ListComponent } from "../../components/list/list.component";

@Component({
  selector: 'app-parties',
  imports: [HeaderComponent, RouterOutlet, ListComponent],
  templateUrl: './parties.component.html',
  styleUrl: './parties.component.scss'
})
export class PartiesComponent {

}
