import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SciedModalModule } from '../scied-modal/scied-modal.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MemoryMenuComponent } from './memory-menu/memory-menu.component';
import { MemoryCardComponent } from './memory-card/memory-card.component';
import { MemoryGameComponent } from './memory-game/memory-game.component';
import { MemoryGameService } from './memory-game.service';

@NgModule({
  imports: [
    CommonModule,
    SciedModalModule,
    MatButtonModule,
    MatGridListModule
  ],
  declarations: [MemoryMenuComponent, MemoryCardComponent, MemoryGameComponent],
  exports: [MemoryMenuComponent, MemoryGameComponent],
  providers: [MemoryGameService]
})
export class MemoryModule { }
