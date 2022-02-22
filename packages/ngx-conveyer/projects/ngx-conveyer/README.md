## ngx-conveyer

```sh
$ npm i ngx-conveyer
```

### use reference variable with reactive state
```
#refName="ngxConveyer"

```
* refName.isReachStart
* refName.isReachEnd

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxConveyerModule } from 'ngx-conveyer';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxConveyerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
```html
<div class="App">
  <button id="prev" [disabled]="conveyer?.isReachStart" (click)="prev()">PREV</button>
  <button id="next" [disabled]="conveyer?.isReachEnd" (click)="next()">NEXT</button>
  <div class="items" [ngxConveyer]="{ horizontal: false, preventClickOnDrag: false }" #conveyer="ngxConveyer">
    <div class="item"><a href="#1">1</a></div>
    <div class="item"><a href="#2">2</a></div>
    <div class="item"><a href="#3">3</a></div>
    <div class="item"><a href="#4">4</a></div>
    <div class="item"><a href="#5">5</a></div>
    <div class="item"><a href="#6">6</a></div>
    <div class="item"><a href="#7">7</a></div>
    <div class="item"><a href="#8">8</a></div>
    <div class="item"><a href="#9">9</a></div>
    <div class="item"><a href="#10">10</a></div>
    <div class="item"><a href="#11">11</a></div>
    <div class="item"><a href="#12">12</a></div>
  </div>
</div>
```
```ts
import { Component, ViewChild } from '@angular/core';
import { NgxConveyerDirective } from 'ngx-conveyer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("conveyer") cv!: NgxConveyerDirective;
  title = 'ngx-conveyer-project';
  prev() {
    this.cv.scrollIntoView("prev", {
      align: "end",
      duration: 500,
    });
  }
  next() {
    this.cv.scrollIntoView("next", {
      align: "start",
      duration: 500,
    });
  }
}
```
