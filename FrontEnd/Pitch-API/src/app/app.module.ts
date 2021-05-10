import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SpeechToTextComponent } from './speech-to-text/speech-to-text.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { InicioComponent } from './inicio/inicio.component';
import { HistoricoComponent } from './historico/historico.component';
import { SobreComponent } from './sobre/sobre.component';
import { PitchEditComponent } from './edit/pitch-edit/pitch-edit.component';
import { PitchDeleteComponent } from './delete/pitch-delete/pitch-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeechToTextComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
    InicioComponent,
    HistoricoComponent,
    SobreComponent,
    PitchEditComponent,
    PitchDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
