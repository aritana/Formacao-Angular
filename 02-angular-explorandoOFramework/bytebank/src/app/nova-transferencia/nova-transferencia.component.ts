import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor: number = 1;
  destino: number = 2;
  transferir() {
    console.log('solicitado nova transferencia');
    console.log(this.valor);
    console.log(this.destino);
  }
}
