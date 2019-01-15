import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CloudMemoryMenuComponent } from './cloud-memory/cloud-memory-menu.component';
import { CloudMemoryGameComponent } from './cloud-memory/cloud-memory-game.component';

const routes: Routes = [
  {
    path: '',
      children: [
        { path: '', component: CloudMemoryMenuComponent },
        { path: ':id', component: CloudMemoryGameComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
