import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CepModel } from '../procurar-restaurante/model/cepMode.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ConsumirApiCorreioService {

  public constructor(private http: HttpClient) { }

  retornarJsonApiCorreios(cep: any): Observable<CepModel> {
    return this.http.get<CepModel>(`http://apps.widenet.com.br/busca-cep/api/cep.json?code=${cep}`);
  }
}
