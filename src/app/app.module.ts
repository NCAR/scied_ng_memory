
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EclipseMemoryGameComponent } from './eclipse-memory/eclipse-memory-game.component';
import { EclipseMemoryMenuComponent } from './eclipse-memory/eclipse-memory-menu.component';

import { AcMemoryGameComponent } from './ac-memory/ac-memory-game.component';
import { AcMemoryMenuComponent } from './ac-memory/ac-memory-menu.component';

import { CloudMemoryGameComponent } from './cloud-memory/cloud-memory-game.component';
import { CloudMemoryMenuComponent } from './cloud-memory/cloud-memory-menu.component';

import { SunMemoryGameComponent } from './sun-memory/sun-memory-game.component';
import { SunMemoryMenuComponent } from './sun-memory/sun-memory-menu.component';

import { MemoryModule } from './memory/memory.module';
import { HttpClientModule } from '@angular/common/http';

declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
    ngModule: Type<T>;
    providers?: Provider[];
  }
}

@NgModule({
  declarations: [
    AppComponent,
    EclipseMemoryGameComponent,
    EclipseMemoryMenuComponent,
    AcMemoryGameComponent,
    AcMemoryMenuComponent,
    CloudMemoryGameComponent,
    CloudMemoryMenuComponent,
    SunMemoryGameComponent,
    SunMemoryMenuComponent
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
