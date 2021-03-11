import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent} from './app.component';

import { EclipseMemoryMenuComponent } from './eclipse-memory/eclipse-memory-menu.component';
import { EclipseMemoryGameComponent } from './eclipse-memory/eclipse-memory-game.component';


const routes: Routes = [
  { path: '',
      children: [
        { path: '', component: EclipseMemoryMenuComponent },
        { path: ':id', component: EclipseMemoryGameComponent }
      ]
  }
];


export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
