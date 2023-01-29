import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [//arquivos, diretrizes e pipes contidas no seu modulo.
    AppComponent,
    HomeComponent
  ],
  imports: [//modulos importados da sua app e de outras bibiliotecas
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],//classes de serviços
  bootstrap: [AppComponent] //primeiro componente renderizado na aplicação.
})
export class AppModule { }
