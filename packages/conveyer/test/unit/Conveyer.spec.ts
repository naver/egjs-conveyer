import {
  cleanup,
  dispatchDrag,
  dispatchMouseWheel,
  sandbox,
  waitEvent,
  waitFor,
} from "./utils/utils";
import * as sinon from "sinon";
import Conveyer from "src";
import { CONVEYER_HTML, NESTED_CONVEYER_HTML } from "./utils/consts";
import * as browserModules from "../../src/browser";
import { ImportMock } from "ts-mock-imports";

describe("test Conveyer", () => {
  let container!: HTMLElement;
  let conveyer!: Conveyer;

  beforeEach(() => {
    container = sandbox("")!;

    container.innerHTML = CONVEYER_HTML;
  });

  afterEach(() => {
    conveyer?.destroy();
    cleanup();
  });
  describe("Initialzation", () => {
    it("should check if css is set if init", () => {
      // Given, When
      conveyer = new Conveyer(".items");

      // Then
      expect(
        document.querySelector<HTMLElement>(".items")!.style.touchAction
      ).to.be.equal("auto");
    });
    it("should check if touchAction is auto if horizontal is false", () => {
      // Given, When
      conveyer = new Conveyer(".items", {
        horizontal: false,
      });

      // Then
      expect(
        document.querySelector<HTMLElement>(".items")!.style.touchAction
      ).to.be.equal("auto");
    });
    it("should check if css is not set if not init", () => {
      // Given, When
      conveyer = new Conveyer(".items", {
        autoInit: false,
      });

      // Then
      expect(
        document.querySelector<HTMLElement>(".items")!.style.touchAction
      ).to.be.not.equal("auto");
    });
    it("should check if css is set if target is element", () => {
      // Given, When
      conveyer = new Conveyer(document.querySelector<HTMLElement>(".items")!);

      // Then
      expect(
        document.querySelector<HTMLElement>(".items")!.style.touchAction
      ).to.be.equal("auto");
    });
    it("should check if css is set if target is ref", () => {
      // Given, When
      const ref = { current: document.querySelector<HTMLElement>(".items") };
      conveyer = new Conveyer(ref);

      // Then
      expect(
        document.querySelector<HTMLElement>(".items")!.style.touchAction
      ).to.be.equal("auto");
    });
    it(`should check whether the width is corrected when scrollWidth is rounded up for IE`, () => {
      // Given
      const items = document.querySelector<HTMLElement>(".items")!;

      items.innerHTML = "";
      items.style.width = "420.1px";

      // When
      // IE rounds up, not rounds.
      Object.defineProperty(items, "scrollWidth", {
        configurable: true,
        get() {
          return 421;
        },
      });

      // test IE
      const mockManager = ImportMock.mockOther(browserModules, "IS_IE");

      mockManager.set(true);

      conveyer = new Conveyer(items);

      // restore
      mockManager.restore();

      // Then
      expect(items.clientWidth).to.be.equal(420);
      expect(items.getBoundingClientRect().width).to.be.closeTo(420.1, 0.01);
      expect(items.scrollWidth).to.be.equal(421);
      expect(conveyer.isReachStart).to.be.equal(true);
      expect(conveyer.isReachEnd).to.be.equal(true);
    });
    it(`should check whether the width is corrected when scrollWidth is rounded up with border for IE`, () => {
      // Given
      const items = document.querySelector<HTMLElement>(".items")!;

      items.innerHTML = "";
      items.style.border = "10px solid black";
      items.style.boxSizing = "border-box";
      items.style.width = "420.1px";
      // 400.1

      // When
      // IE rounds up, not rounds.
      Object.defineProperty(items, "scrollWidth", {
        configurable: true,
        get() {
          return 401;
        },
      });

      // test IE
      const mockManager = ImportMock.mockOther(browserModules, "IS_IE");

      mockManager.set(true);

      conveyer = new Conveyer(items);

      // restore
      mockManager.restore();

      // Then
      expect(items.clientWidth).to.be.equal(400);
      expect(items.getBoundingClientRect().width).to.be.closeTo(420.1, 0.01);
      expect(items.scrollWidth).to.be.equal(401);
      expect(conveyer.isReachStart).to.be.equal(true);
      expect(conveyer.isReachEnd).to.be.equal(true);
    });
  });
  describe("Reactvie Properties", () => {
    it("should check if isReachStart is true, isReachEnd is false if init", () => {
      // Given, When
      conveyer = new Conveyer(".items");

      // Then
      expect(conveyer.isReachStart).to.be.true;
      expect(conveyer.isReachEnd).to.be.false;
    });
    it("should check if isReachStart is set to false when out of start", async () => {
      // Given
      conveyer = new Conveyer(".items");

      // When
      conveyer.scrollTo(20);
      await waitFor(100);

      // Then
      expect(conveyer.isReachStart).to.be.false;
    });
    it("should check if isReachEnd is set to true when reach end", async () => {
      // Given
      conveyer = new Conveyer(".items");

      // When
      conveyer.scrollTo(
        document.querySelector<HTMLElement>(".items")!.scrollWidth
      );
      await waitFor(100);

      // Then
      expect(conveyer.isReachEnd).to.be.true;
    });
    describe("Subscribe", () => {
      it("should check if the isReachEnd notification is triggered when isReachEnd is set to true", async () => {
        // Given
        conveyer = new Conveyer(".items");

        // When
        const spy = sinon.spy();
        conveyer.subscribe("isReachEnd", spy);
        conveyer.scrollTo(
          document.querySelector<HTMLElement>(".items")!.scrollWidth
        );
        await waitFor(100);

        // Then
        expect(spy.callCount).to.be.equals(1);
      });
      it("should check if the isReachStart notification is triggered when isReachStart is set to false", async () => {
        // Given
        conveyer = new Conveyer(".items");

        // When
        const spy = sinon.spy();
        conveyer.subscribe("isReachStart", spy);
        conveyer.scrollTo(
          document.querySelector<HTMLElement>(".items")!.scrollWidth
        );
        await waitFor(100);

        // Then
        expect(spy.callCount).to.be.equals(1);
      });
      it("should check if scrollPos changes when scrolling", async () => {
        // Given
        conveyer = new Conveyer(".items");

        // When
        const spy = sinon.spy();
        conveyer.subscribe("scrollPos", spy);
        conveyer.scrollTo(300, 100);
        await waitFor(150);

        // Then
        expect(spy.callCount).to.be.above(0);
        expect(conveyer.scrollPos).to.be.equals(300);
      });
    });
  });

  describe("Drag", () => {
    it("should check if drag works", async () => {
      // Given
      const items = document.querySelector<HTMLElement>(".items")!;

      conveyer = new Conveyer(items);

      // When

      await dispatchDrag(
        items,
        { left: 0, top: 0 },
        { left: -100, top: 0 },
        { duration: 100, interval: 50 }
      );

      await waitEvent(conveyer, "finishScroll");
      expect(items.scrollLeft).to.be.at.least(100);
    });
    it("should check if prevent click when drag", async () => {
      // Given
      const items = document.querySelector<HTMLElement>(".items")!;

      items.addEventListener("mouseup", () => {
        requestAnimationFrame(() => {
          items.dispatchEvent(new MouseEvent("click"));
        });
      });
      const clickSpy = sinon.spy();
      items.addEventListener("click", clickSpy);
      conveyer = new Conveyer(items, {
        preventClickOnDrag: true,
      });

      // When
      await dispatchDrag(
        container,
        { left: 0, top: 0 },
        { left: -100, top: 0 },
        { duration: 100, interval: 50 }
      );
      await waitFor(100);

      // Then
      expect(clickSpy.callCount).to.be.equals(0);
    });
    it("should check if click event triggered when not drag", async () => {
      // Given
      const items = document.querySelector<HTMLElement>(".items")!;
      items.addEventListener("mouseup", () => {
        requestAnimationFrame(() => {
          items.dispatchEvent(new MouseEvent("click"));
        });
      });
      const clickSpy = sinon.spy();
      items.addEventListener("click", clickSpy);
      conveyer = new Conveyer(items, {
        preventClickOnDrag: true,
      });
      // When

      await dispatchDrag(
        items,
        { left: 0, top: 0 },
        { left: 0, top: 0 },
        { duration: 0, interval: 50 }
      );
      await waitFor(60);

      // Then
      expect(clickSpy.callCount).to.be.equals(1);
    });
  });
  describe("Methods", () => {
    it("should check if scrollLeft is changed when scrollTo is called", async () => {
      // Given
      conveyer = new Conveyer(".items");

      // When
      conveyer.scrollTo(100);
      await waitFor(100);

      // Then
      expect(
        document.querySelector<HTMLElement>(".items")!.scrollLeft
      ).to.be.equals(100);
      expect(conveyer.scrollPos).to.be.equals(100);
    });
    it("should check if scrollLeft is changed when scrollBy is called", async () => {
      // Given
      conveyer = new Conveyer(".items");

      // When
      conveyer.scrollBy(100);
      await waitFor(100);

      // Then
      expect(
        document.querySelector<HTMLElement>(".items")!.scrollLeft
      ).to.be.equals(100);
      expect(conveyer.scrollPos).to.be.equals(100);
    });
    it("should check if start and end are inside when scrollLeft is 0", async () => {
      // Given
      conveyer = new Conveyer(".items");
      document.querySelector<HTMLElement>(".items")!.scrollLeft = 0;
      await waitFor(100);

      // When
      const prev = conveyer.findElement("prev")!;
      const start = conveyer.findElement("start")!;
      const end = conveyer.findElement("end")!;
      const next = conveyer.findElement("next")!;

      // console.log(prev.innerHTML);
      // | 1 2 3 | 4
      expect(prev).to.be.null;
      expect(start.innerHTML).to.be.equals("1");
      expect(end.innerHTML).to.be.equals("3");
      expect(next.innerHTML).to.be.equals("4");
    });
    it("should check if start and end are inside when scrollLeft is end", async () => {
      // Given
      conveyer = new Conveyer(".items");
      const items = document.querySelector<HTMLElement>(".items")!;

      items.scrollLeft = items.scrollWidth;
      await waitFor(100);

      // When
      const prev = conveyer.findElement("prev")!;
      const start = conveyer.findElement("start")!;
      const end = conveyer.findElement("end")!;
      const next = conveyer.findElement("next")!;

      // console.log(prev.innerHTML);
      // 9 | 10 11 12 |
      expect(prev.innerHTML).to.be.equals("9");
      expect(start.innerHTML).to.be.equals("10");
      expect(end.innerHTML).to.be.equals("12");
      expect(next).to.be.null;
    });
    it("should check if start and end are inside when scrollLeft is 500", async () => {
      // Given
      conveyer = new Conveyer(".items");
      document.querySelector<HTMLElement>(".items")!.scrollLeft = 500;
      await waitFor(100);

      // When
      const prev = conveyer.findElement("prev")!;
      const start = conveyer.findElement("start")!;
      const end = conveyer.findElement("end")!;
      const next = conveyer.findElement("next")!;

      // console.log(prev.innerHTML);
      // 1 2 3-1 | 3-2 4 5 6-1 | 6-2 7
      expect(prev.innerHTML).to.be.equals("2");
      expect(start.innerHTML).to.be.equals("4");
      expect(end.innerHTML).to.be.equals("5");
      expect(next.innerHTML).to.be.equals("7");
    });
    it("should check if start and end are inside when scrollLeft is 600", async () => {
      // Given
      conveyer = new Conveyer(".items");
      document.querySelector<HTMLElement>(".items")!.scrollLeft = 600;
      await waitFor(100);

      // When
      const prev = conveyer.findElement("prev")!;
      const start = conveyer.findElement("start")!;
      const end = conveyer.findElement("end")!;
      const next = conveyer.findElement("next")!;

      // console.log(prev.innerHTML);
      // 1 2 3 | 4 5 6 | 7 8
      expect(prev.innerHTML).to.be.equals("3");
      expect(start.innerHTML).to.be.equals("4");
      expect(end.innerHTML).to.be.equals("6");
      expect(next.innerHTML).to.be.equals("7");
    });
    describe("scrollIntoView", () => {
      it("should check it target moves start when align is start", async () => {
        // Given
        conveyer = new Conveyer(".items");

        // When
        // 200
        conveyer.scrollIntoView(
          document.querySelector<HTMLElement>(".item:nth-child(2)")!,
          {
            align: "start",
          }
        );
        await waitFor(100);

        // Then
        expect(
          document.querySelector<HTMLElement>(".items")!.scrollLeft
        ).to.be.equals(200);
        expect(conveyer.scrollPos).to.be.equals(200);
      });
      it("should check it target moves center when align is center", async () => {
        // Given
        conveyer = new Conveyer(".items");

        // When
        // viewport 600
        // 400
        conveyer.scrollIntoView(
          document.querySelector<HTMLElement>(".item:nth-child(3)")!,
          {
            align: "center",
          }
        );
        await waitFor(100);

        // Then
        const items = document.querySelector<HTMLElement>(".items")!;
        // |1 2 3|
        expect(items.scrollLeft).to.be.equals(200);
        expect(conveyer.scrollPos).to.be.equals(200);
      });
      it("should check it target moves end when align is end", async () => {
        // Given
        conveyer = new Conveyer(".items");

        // When
        // viewport 600
        // 1200
        conveyer.scrollIntoView(
          document.querySelector<HTMLElement>(".item:nth-child(7)")!,
          {
            align: "end",
          }
        );
        await waitFor(100);

        // Then
        const items = document.querySelector<HTMLElement>(".items")!;
        // |4 5 6|
        expect(items.scrollLeft).to.be.equals(800);
        expect(conveyer.scrollPos).to.be.equals(800);
      });
      it("should check it target(3) moves start when target is end and align is start", async () => {
        // Given
        conveyer = new Conveyer(".items");

        // When
        // 1 2 3 // "end" = 3
        // to
        // 3 4 5
        conveyer.scrollIntoView("end", {
          align: "start",
        });
        await waitFor(100);

        // Then
        const items = document.querySelector<HTMLElement>(".items")!;
        expect(items.scrollLeft).to.be.equals(400);
        expect(conveyer.scrollPos).to.be.equals(400);
      });
      it("should check it target(4) moves start when target is end and sibling(1)", async () => {
        // Given
        conveyer = new Conveyer(".items");

        // When
        // 1 2 3 | 4 // "end" + sibling(1) = 4
        // to
        // 4 5 6
        conveyer.scrollIntoView("end", {
          align: "start",
          sibling: 1,
        });
        await waitFor(100);

        // Then
        const items = document.querySelector<HTMLElement>(".items")!;
        expect(items.scrollLeft).to.be.equals(600);
        expect(conveyer.scrollPos).to.be.equals(600);
      });
      it("should check whether the target moves to start except in place when excludeStand is true", async () => {
        // Given
        conveyer = new Conveyer(".items");
        // 4 5 6
        conveyer.scrollTo(600);
        await waitFor(100);

        // When
        // 3 | 4 5 6 |
        // to
        // | 3 4 5 |
        conveyer.scrollIntoView("start", {
          align: "start",
          excludeStand: true,
        });
        await waitFor(100);

        // Then
        const items = document.querySelector<HTMLElement>(".items")!;
        expect(items.scrollLeft).to.be.equals(400);
        expect(conveyer.scrollPos).to.be.equals(400);
      });
    });
  });
  describe("Events", () => {
    it("should check if reachStart event triggered, isReachStart is true", () => {
      // Given
      conveyer = new Conveyer(".items", {
        autoInit: false,
      });

      // When
      const spy = sinon.spy();
      conveyer.on("reachStart", spy);
      conveyer.init();

      // Then
      expect(spy.callCount).to.be.equals(1);
    });
    it("should check if leaveStart event triggered, isReachStart is false", async () => {
      // Given
      conveyer = new Conveyer(".items");

      // When
      const spy = sinon.spy();
      conveyer.on("leaveStart", spy);
      conveyer.init();

      conveyer.scrollTo(20);
      await waitFor(100);

      // Then
      expect(spy.callCount).to.be.equals(1);
    });
    it("should check if reachEnd event triggered, isReachEnd is true", async () => {
      // Given
      conveyer = new Conveyer(".items");

      // When
      const spy = sinon.spy();
      conveyer.on("reachEnd", spy);
      conveyer.init();
      conveyer.scrollTo(
        document.querySelector<HTMLElement>(".items")!.scrollWidth
      );
      await waitFor(100);

      // Then
      expect(spy.callCount).to.be.equals(1);
    });
    it("should check if leaveEnd event triggered, isReachEnd is false", async () => {
      // Given
      conveyer = new Conveyer(".items");
      conveyer.scrollTo(
        document.querySelector<HTMLElement>(".items")!.scrollWidth
      );
      await waitFor(100);

      // When
      const spy = sinon.spy();
      conveyer.on("leaveEnd", spy);
      conveyer.init();
      conveyer.scrollTo(0);
      await waitFor(100);

      // Then
      expect(spy.callCount).to.be.equals(1);
    });
  });
  describe("Options", () => {
    describe("useWheel", () => {
      [true, false].forEach(useWheel => {
        it(`should check if the target is moved by the mouse wheel only when useWheel is true (useWheel: ${useWheel})`, async () => {
          // Given
          conveyer = new Conveyer(".items", {
            useWheel,
          });

          // When
          await dispatchMouseWheel(
            document.querySelector<HTMLElement>(".items")!,
            600,
            { duration: 200, interval: 10 }
          );
          await waitFor(200); // wait until release animation is finished

          // Then
          expect(conveyer.scrollPos).to.be.equals(useWheel ? 600 : 0);
        });
      });
    });

    describe("nested", () => {
      let childConveyer!: Conveyer;

      beforeEach(() => {
        container.innerHTML = NESTED_CONVEYER_HTML;
        conveyer = new Conveyer("#parent");
      });

      afterEach(() => {
        childConveyer?.destroy();
      });

      it("should check if parent Conveyer is moving when child Conveyer reaches end and nested is true", async () => {
        // Given
        childConveyer = new Conveyer("#child", {
          nested: true,
        });
        const nestedItem = document.querySelector<HTMLElement>("#child")!;

        // When
        await dispatchDrag(
          nestedItem,
          { left: 0, top: 0 },
          { left: -4000, top: 0 },
          { duration: 200, interval: 50 }
        );

        // Then
        expect(conveyer.scrollPos).to.be.equals(1000);
        expect(childConveyer.scrollPos).to.be.equals(1000);
      });

      it("should check if parent Conveyer is not moving when nested is false by default", async () => {
        // Given
        childConveyer = new Conveyer("#child");
        const nestedItem = document.querySelector<HTMLElement>("#child")!;

        // When
        await dispatchDrag(
          nestedItem,
          { left: 0, top: 0 },
          { left: -4000, top: 0 },
          { duration: 200, interval: 50 }
        );

        // Then
        expect(conveyer.scrollPos).to.be.equals(0);
        expect(childConveyer.scrollPos).to.be.equals(1000);
      });
    });
  });
});
