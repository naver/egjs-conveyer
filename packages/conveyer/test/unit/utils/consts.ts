export const HORIZONTAL_CONVEYER_STYLE = `<style>
  html, body {
    margin: 0;
    padding: 0;
  }
  .items, .nested {
    position: relative;
    overflow: scroll hidden;
    width: 600px;
    white-space: nowrap;
    overscroll-behavior: none;
    user-select: none;
    font-size: 0;
  }
  .item {
    display: inline-block;
    width: 200px;
    height: 200px;
  }
</style>`;

export const VERTICAL_CONVEYER_STYLE = `<style>
  .items {
    position: relative;
    overflow: scroll;
    width: 100%;
    white-space: nowrap;
    overscroll-behavior: none;
    user-select: none;
    height: 400px;
    border: 1px solid black;
  }
  .item {
    overflow: hidden;
    margin: 18px 12px 30px 0;
    width: 271px;
    height: 244px;
    line-height: 244px;
    border-radius: 3px;
  }
</style>`;

export const RESIZE_CONVEYER_STYLE = `<style>
  html, body {
    margin: 0;
    padding: 0;
  }
  .container {
    resize: horizontal;
    overflow: auto;
  }
  .items, .nested {
    position: relative;
    overflow: scroll hidden;
    width: 100%;
    white-space: nowrap;
    overscroll-behavior: none;
    user-select: none;
    font-size: 0;
  }
  .item {
    display: inline-block;
    width: 100px;
    height: 100px;
  }
</style>`;

export const CONVEYER_HTML = `
<div class="items">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
  <div class="item">8</div>
  <div class="item">9</div>
  <div class="item">10</div>
  <div class="item">11</div>
  <div class="item">12</div>
</div>`;

export const NESTED_CONVEYER_HTML = `
<div id="parent" class="items">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">
    <div id="child" class="nested items">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
      <div class="item">8</div>
    </div>
  </div>
  <div class="item">6</div>
  <div class="item">7</div>
  <div class="item">8</div>
</div>`;

export const RESIZE_CONVEYER_HTML = `
<div class="container">
  <div id="conveyer" class="items">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
</div>
`;

export const HORIZONTAL_CONVEYER = `${HORIZONTAL_CONVEYER_STYLE}${CONVEYER_HTML}`;

export const VERTICAL_CONVEYER = `${VERTICAL_CONVEYER_STYLE}${CONVEYER_HTML}`;

export const NESTED_CONVEYER = `${HORIZONTAL_CONVEYER_STYLE}${NESTED_CONVEYER_HTML}`;

export const RESIZE_CONVEYER = `${RESIZE_CONVEYER_STYLE}${RESIZE_CONVEYER_HTML}`;
