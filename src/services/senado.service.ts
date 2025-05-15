import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import environment from "../environment/environment";
import { Observable } from "rxjs";
import { ListParties } from "./dto/listParties.dto";

@Injectable({
  providedIn: "root",

})

export class SenadoSevice {

  private api = environment.apiSendado;

  constructor(private httpClient: HttpClient) {}

  listarPartidos():Observable<ListParties> {
    return this.httpClient.get<ListParties>(`${this.api}/dadosabertos/composicao/lista/partidos`)
  }
}