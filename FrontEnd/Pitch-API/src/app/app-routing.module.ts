import { InicioComponent } from './inicio/inicio.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SpeechToTextComponent } from './speech-to-text/speech-to-text.component';
import { SobreComponent } from './sobre/sobre.component';
import { HistoricoComponent } from './historico/historico.component';

const routes: Routes = [

  {path: '', redirectTo: 'entrar', pathMatch: 'full'},
  {path:'speech-to-text', component: SpeechToTextComponent},
  {path:'entrar', component: EntrarComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'menu',component:MenuComponent},
  {path: 'sobre', component:SobreComponent},
  {path: 'historico/:id', component:HistoricoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }