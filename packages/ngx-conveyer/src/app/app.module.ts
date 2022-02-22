// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgxConveyerModule } from 'projects/ngx-conveyer/src/public-api';

// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//   ],
//   imports: [
//     BrowserModule,
//     NgxConveyerModule,
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NgxInfiniteGridModule } from "@egjs/ngx-infinitegrid";
import { NgxConveyerModule } from 'projects/ngx-conveyer/src/public-api';
// import { NgxConveyerModule } from "@egjs/ngx-conveyer";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxInfiniteGridModule, NgxConveyerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
