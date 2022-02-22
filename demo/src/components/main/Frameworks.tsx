import React from "react";
import Flicking from "@egjs/react-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";

import styles from "./frameworks.module.css";

export default () => {
  const plugins = [new AutoPlay()];

  return (<Flicking className="mb-2" plugins={plugins} circular={true}>
    <div className="framework-logo button mr-2 is-info">
      <div className="framework-logo-wrapper mr-2"><img src="img/icons/react.svg" /></div>
      <a href="https://npmjs.com/@egjs/react-conveyer" target="_blank">@egjs/react-conveyer</a>
    </div>
    <div className="framework-logo button mr-2 is-danger">
      <div className="framework-logo-wrapper mr-2"><img src="img/icons/angular.svg" /></div>
      <a href="https://npmjs.com/@egjs/ngx-conveyer" target="_blank">@egjs/ngx-conveyer</a>
    </div>
    <div className="framework-logo button mr-2 is-success">
      <div className="framework-logo-wrapper mr-2"><img src="img/icons/vue.svg" /></div>
      <a href="https://npmjs.com/@egjs/vue-conveyer" target="_blank">@egjs/vue-conveyer</a>
    </div>
    <div className="framework-logo button mr-2 is-light">
      <div className="framework-logo-wrapper mr-2"><img src="img/icons/svelte.svg" /></div>
      <a href="https://npmjs.com/@egjs/svelte-conveyer" target="_blank">@egjs/svelte-conveyer</a>
    </div>
    <div className={`framework-logo button mr-2 ${styles["is-vue3"]}`}>
      <div className="framework-logo-wrapper mr-2"><img src="img/icons/vue.svg" /></div>
      <a href="https://npmjs.com/@egjs/vue2-conveyer" target="_blank">@egjs/vue2-conveyer</a>
    </div>
    <div className="framework-logo button mr-2 is-info">
      <div className="framework-logo-wrapper mr-2"><img src="img/icons/react.svg" /></div>
      <a href="https://npmjs.com/@egjs/react-conveyer" target="_blank">@egjs/react-conveyer</a>
    </div>
    <div className="framework-logo button mr-2 is-danger">
      <div className="framework-logo-wrapper mr-2"><img src="img/icons/angular.svg" /></div>
      <a href="https://npmjs.com/@egjs/ngx-conveyer" target="_blank">@egjs/ngx-conveyer</a>
    </div>
    <div className="framework-logo button mr-2 is-success">
      <div className="framework-logo-wrapper mr-2"><img src="img/icons/vue.svg" /></div>
      <a href="https://npmjs.com/@egjs/vue-conveyer" target="_blank">@egjs/vue-conveyer</a>
    </div>
    <div className="framework-logo button mr-2 is-light">
      <div className="framework-logo-wrapper mr-2"><img src="img/icons/svelte.svg" /></div>
      <a href="https://npmjs.com/@egjs/svelte-conveyer" target="_blank">@egjs/svelte-conveyer</a>
    </div>
    <div className={`framework-logo button mr-2 ${styles["is-vue3"]}`}>
      <div className="framework-logo-wrapper mr-2"><img src="img/icons/vue.svg" /></div>
      <a href="https://npmjs.com/@egjs/vue2-conveyer" target="_blank">@egjs/vue2-conveyer</a>
    </div>
  </Flicking>);
};
