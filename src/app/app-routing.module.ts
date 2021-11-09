import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent} from './app.component';

import { EclipseMemoryMenuComponent } from './eclipse-memory/eclipse-memory-menu.component';
import { EclipseMemoryGameComponent } from './eclipse-memory/eclipse-memory-game.component';

//import { SunMemoryMenuComponent } from './sun-memory/sun-memory-menu.component';
//import { SunMemoryGameComponent } from './sun-memory/sun-memory-game.component';

//import { CloudMemoryMenuComponent } from './cloud-memory/cloud-memory-menu.component';
//import { CloudMemoryGameComponent } from './cloud-memory/cloud-memory-game.component';

//import { AcMemoryMenuComponent } from './ac-memory/ac-memory-menu.component';
//import { AcMemoryGameComponent } from './ac-memory/ac-memory-game.component';

const routes: Routes = [
  { path: '',
      children: [
        { path: '', component: EclipseMemoryMenuComponent },
        { path: ':id', component: EclipseMemoryGameComponent }
      ]
  }
  /*{ path: '',
      children: [
        { path: '', component: SunMemoryMenuComponent },
        { path: ':id', component: SunMemoryGameComponent }
      ]
  }*/
  /*{ path: '',
      children: [
        { path: '', component: CloudMemoryMenuComponent },
        { path: ':id', component: CloudMemoryGameComponent }
      ]
  }*/
  /*{ path: '',
      children: [
        { path: '', component: AcMemoryMenuComponent },
        { path: ':id', component: AcMemoryGameComponent }
      ]
  }*/
];


export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
