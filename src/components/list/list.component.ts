import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { SenadoSevice } from '../../services/senado.service';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  partidos: Partidos[];

  constructor(private senadoService: SenadoSevice) {
    this.partidos = [];
  }

  ngOnInit() {
    this.senadoService.listarPartidos().subscribe((items) => {
      this.partidos = items.ListaPartidos.Partidos.Partido.map((politicalParties) => ({
        name: politicalParties.Nome,
        acronymus: politicalParties.Sigla,
        creationDate: politicalParties.DataCriacao,
        extinctDate: politicalParties.DataExtincao
      }) as Partidos)

      console.log('get');
      console.log(items);
    })
  }
}

interface Partidos {
  creationDate: Date,
  extinctDate: Date,
  name: string,
  acronymus: string
}
