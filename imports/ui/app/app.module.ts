import '@angular/compiler';
import 'imports/ui/polyfills';

import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

//Views

import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

//Components
import { NavbarComponent } from './components/navbar/navbar.component';



//PrimeNG
import {StyleClassModule} from 'primeng/styleclass';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';

//Modules
// import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    DragDropModule,
    AppRoutingModule,
    StyleClassModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    // HomeModule
  ],
  providers: [],
  declarations: [
    AppComponent,
    PageNotFoundComponent, NavbarComponent,
  ],
  entryComponents: [
  ],
  bootstrap: [
    AppComponent
  ]
})
@Injectable()
export class AppModule { }
