import { Metadata } from "./Metadata.dto"
import { PoliticalParty } from "./PoliticalParty.dto"

export interface ListParties {
  ListaPartidos: {
    noNamespaceSchemaLocation: string,
    Metadados: Metadata,
    Partidos: {
      Partido: PoliticalParty[],
    }
  }
}