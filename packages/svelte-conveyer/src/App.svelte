<script>
  import { useConveyer } from "./svelte-conveyer/useConveyer.ts";

  const {
    ref: ref1,
    isReachStart,
    isReachEnd,
    scrollIntoView,
    onBeginScroll,
    onFinishScroll,
  } = useConveyer({
    horizontal: false,
  });

  onBeginScroll(() => {
    console.log("begin scroll");
  });
  onFinishScroll(() => {
    console.log("finish scroll");
  });
</script>

<style>
body {
  background: #f0f3fb;
  margin-left: 0;
  margin-right: 0;
}

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
.container {
  display: block;
  position: relative;
  width: 100%;
}

.item {
  overflow: hidden;
  margin: 18px 12px 30px 0;
  width: 271px;
  height: 244px;
  line-height: 244px;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  border-radius: 3px;
  background-color: #fff;
  -webkit-box-shadow: 0 2px 2px 0 rgb(0 0 0 / 4%), 0 0 2px 0 rgb(0 0 0 / 15%);
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 4%), 0 0 2px 0 rgb(0 0 0 / 15%);
}

#prev,
#next {
  position: absolute;
  top: 0;
  z-index: 10;
}

#prev {
  left: 100px;
}

#next {
  right: 100px;
}
</style>
<div class="App">
  <button id="prev" disabled={$isReachStart} on:click={() => {
    scrollIntoView("start", {
      align: "end",
      duration: 500,
    });
  }}>PREV</button>
  <button id="next" disabled={$isReachEnd} on:click={() => {
    scrollIntoView("end", {
      align: "start",
      duration: 500,
    });
  }}>NEXT</button>
  <div class="items" use:ref1>
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
