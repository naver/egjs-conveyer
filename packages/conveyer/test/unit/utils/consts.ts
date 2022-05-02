export const CONVEYER_HTML = `<style>
  html, body {
    margin: 0;
    padding: 0;
  }
  .items {
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
</style>
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
