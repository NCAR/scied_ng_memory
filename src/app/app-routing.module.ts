import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SunMemoryMenuComponent } from './sun-memory/sun-memory-menu.component';
import { SunMemoryGameComponent } from './sun-memory/sun-memory-game.component';

const routes: Routes = [
  {
    path: '',
      children: [
        { path: '', component: SunMemoryMenuComponent },
        { path: ':id', component: SunMemoryGameComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
