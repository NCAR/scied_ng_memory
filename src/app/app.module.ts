import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoryModule } from './core/modules/memory/memory.module';

import { CloudMemoryGameComponent } from './cloud-memory/cloud-memory-game.component';
import { CloudMemoryMenuComponent } from './cloud-memory/cloud-memory-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CloudMemoryGameComponent,
    CloudMemoryMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MemoryModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
