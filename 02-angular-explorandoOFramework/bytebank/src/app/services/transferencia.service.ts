import { Injectable } from '@angular/core';

//can be injectd in the constructor of another class,
//ex: constructor(private service: TransferenciaService)...
@Injectable({
  providedIn: 'root', //existe no contexto root, enquanto app está ativa.
})
export class TransferenciaService {
  listaTransferencia: Array<any>;

  constructor() {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  adicionar(transferencia: any) {
    this.hidratar(transferencia);
    this.listaTransferencia.push(transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
