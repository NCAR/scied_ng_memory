import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoryModule } from './core/modules/memory/memory.module';

import { SunMemoryGameComponent } from './sun-memory/sun-memory-game.component';
import { SunMemoryMenuComponent } from './sun-memory/sun-memory-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SunMemoryGameComponent,
    SunMemoryMenuComponent
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
