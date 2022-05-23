export const CONVEYER_STYLE = `<style>
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

export const CONVEYER_HTML = `${CONVEYER_STYLE}
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

export const NESTED_CONVEYER_HTML = `${CONVEYER_STYLE}
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
