import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsolesComponent } from './views/consoles/consoles.component';
import { JogosComponent } from './views/jogos/jogos.component';
import { MinhacontaComponent } from './views/minhaconta/minhaconta.component';




const routes: Routes = [
  {
    path: 'jogos',
    component: JogosComponent
  },
  {
    path: 'consoles',
    component: ConsolesComponent
  },
  {
    path: 'minhaconta',
    component: MinhacontaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
