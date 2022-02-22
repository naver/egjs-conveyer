/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";

export default () => <div className="columns">
  <div className="column">
  <div className="box">
      <div className="block is-flex is-flex-direction-row is-align-items-center">
        <figure className="image is-32x32 mx-5">
          <img src="img/icons/drag.svg" />
        </figure>
        <span className="subtitle has-text-black">Support Drag Gesture</span>
      </div>
      <div className="block">
        <p>You can use Native Scroll-like behavior through Drag.</p>
      </div>
    </div>
    <div className="box">
      <div className="block is-flex is-flex-direction-row is-align-items-center">
        <figure className="image is-32x32 mx-5">
          <img src="img/icons/books.svg" />
        </figure>
        <span className="subtitle has-text-black">Support Scroll Events</span>
      </div>
      <div className="block">
        <p>You can use custom scroll events like onBeginScroll, onFinishScroll, onReachStart, onLeaveStart, etc.</p>
      </div>
    </div>
  </div>
  <div className="column">
    <div className="box">
      <div className="block is-flex is-flex-direction-row is-align-items-center">
        <figure className="image is-32x32 mx-5">
          <img src="img/icons/animation.svg" />
        </figure>
        <span className="subtitle has-text-black">Support Animation</span>
      </div>
      <div>
        <p>By adding easing features such as bounce, elasticity, and back, you can create smooth scrolling animations like Native Scroll.</p>
      </div>
    </div>
    <div className="box">
      <div className="block is-flex is-flex-direction-row is-align-items-center">
        <figure className="image is-32x32 mx-5">
          <img src="img/icons/typescript.svg" />
        </figure>
        <span className="subtitle has-text-black">Typescript</span>
      </div>
      <div className="block">
        <p>Conveyer is fully written in <a href="https://www.typescriptlang.org/" target="_blank">Typescript</a>, and every classes, properties, and events are correctly typed and exported.</p>
      </div>
    </div>
  </div>
  <div className="column">
    <div className="box">
      <div className="block is-flex is-flex-direction-row is-align-items-center">
        <figure className="image is-32x32 mx-5">
          <img src="img/icons/reaction.svg" />
        </figure>
        <span className="subtitle has-text-black">Support Reactive Properties</span>
      </div>
      <div className="block">
        <p>Supports Reactive properties that can detect changes, such as isReachStart, isReachEnd.</p>
        <p>It can be used as a detection method with subscribe method or as Hooks in Framework.</p>
        <p></p>
      </div>
    </div>
  </div>
</div>;
