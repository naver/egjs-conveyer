import { Component, ViewChild } from "@angular/core";
import { NgxInfiniteGridComponent } from "@egjs/ngx-infinitegrid";
import { OnRequestAppend, OnRenderComplete } from "@egjs/infinitegrid";
import { NgxConveyerDirective } from "projects/ngx-conveyer/src/public-api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("ig", { static: false }) ig!: NgxInfiniteGridComponent;
  @ViewChild("conveyer", { static: false }) conveyer!: NgxConveyerDirective;
  items = this.getItems(0, 10);
  getItems(nextGroupKey: number, count: number) {
    const nextItems = [];
    const nextKey = nextGroupKey * count;

    for (let i = 0; i < count; ++i) {
      nextItems.push({ groupKey: nextGroupKey, key: nextKey + i });
    }
    return nextItems;
  }
  groupBy(_: any, item: any) {
    return item.groupKey;
  }
  trackBy(_: any, item: any) {
    return item.key;
  }
  onRequestAppend(e: OnRequestAppend) {
    const nextGroupKey = (+e.groupKey! || 0) + 1;

    this.items = [...this.items, ...this.getItems(nextGroupKey, 10)];
  }
  onRenderComplete(e: OnRenderComplete) {
    this.conveyer.setItems(
      e.currentTarget.getItems().map((item) => ({
        element: item.element,
        pos: item.computedContentPos,
        size: item.contentSize,
      }))
    );
    this.conveyer.updateContainer();
  }
  prev() {
    this.conveyer.scrollIntoView("start", {
      align: "end",
      duration: 500,
    });
  }
  next() {
    this.conveyer.scrollIntoView("end", {
      align: "start",
      duration: 500,
    });
  }
  beginScroll(e: any) {
    (console as any).log("begin", e);
  }
  finishScroll(e: any) {
    (console as any).log("finish", e);
  }
}
