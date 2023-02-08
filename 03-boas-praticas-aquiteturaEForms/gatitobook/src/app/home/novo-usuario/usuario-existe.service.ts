import { AbstractControl } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { Injectable } from '@angular/core';
import { first, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioExisteService {
  constructor(private novoUsuarioService: NovoUsuarioService) {}
  usuarioJaExiste() {
    /*observable, assincrono. cada digitacao
    o angular observa, converter a digitacao em requisicao, value changes,
    pipe, do rxjs*/
    return (control: AbstractControl) => {
      //recebe o que o usuário tecla
      return control.valueChanges.pipe(
        //fazer troca do fluxo da digitação pelo da requisição.
        switchMap(
          (nomeUsuario) =>
            this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario) //true or false
        ),
        map(
          (usuarioExiste) => (usuarioExiste ? { usuarioExistente: true } : null) //objeto ou nulo
        ),
        first() //Emit the first value or first to pass provided expression, encerra
      );
    };
  }
}
