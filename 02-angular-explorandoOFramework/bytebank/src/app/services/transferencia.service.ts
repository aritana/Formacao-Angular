import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transferencia } from './models/transferencia/model';

//can be injectd in the constructor of another class,
//ex: constructor(private service: TransferenciaService)...
@Injectable({
  providedIn: 'root', //existe no contexto root, enquanto app está ativa.
})
export class TransferenciaService {
  listaTransferencia: Array<any>;
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  adicionar(transferencia: Transferencia):Observable<Transferencia> {
    this.hidratar(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url); //retorna um observable
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
