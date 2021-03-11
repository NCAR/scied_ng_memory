
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EclipseMemoryGameComponent } from './eclipse-memory/eclipse-memory-game.component';
import { EclipseMemoryMenuComponent } from './eclipse-memory/eclipse-memory-menu.component';
import { MemoryModule } from './memory/memory.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EclipseMemoryGameComponent,
    EclipseMemoryMenuComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MemoryModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
