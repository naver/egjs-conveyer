import React from "react";
import CodeBlock from "@theme/CodeBlock";

export default () => <section className="py-4">
  <div className="title mb-6">Quick Start</div>
  <div className="columns">
    <div className="column">
      <CodeBlock language="html" className="language-html" title="HTML">{`<div class="items">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>`}</CodeBlock>
    </div>
    <div className="column">
      <CodeBlock language="js" className="language-js" title="JS">{`import Conveyer from "@egjs/conveyer";

const conveyer = new Conveyer(".items");
`}</CodeBlock>
    </div>
  </div>
</section>;
