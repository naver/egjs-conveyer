import Component from "@egjs/component";

export function sandbox(obj: object | string, prop?: object): HTMLElement {
  const tmp = document.createElement("div");
  tmp.className = "_tempSandbox_";
  if (typeof obj === "string") {
    tmp.id = obj;
  } else {
    tmp.id = "sandbox";
  }

  if (typeof obj === "object" || typeof prop === "object") {
    const attrs = typeof prop === "object" ? prop : obj;
    for (const p in attrs as object) {
      if (/class|className/.test(p)) {
        tmp.setAttribute(p, attrs[p] + " _tempSandbox_");
      } else {
        tmp.setAttribute(p, attrs[p]);
      }
    }
  }
  document.body.appendChild(tmp);
  return tmp;
}

export function cleanup() {
  const elements = [].slice.call(document.querySelectorAll("._tempSandbox_"));
  elements.forEach((v) => {
    v.parentNode!.removeChild(v);
  });
}

export function waitFor(delay: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export function waitEvent<T = any>(component: Component<any>, eventName: string): Promise<T> {
  return new Promise((resolve) => {
    component.once(eventName, (e) => {
      resolve(e);
    });
  });
}

export function createElement(text: string) {
  const el = document.createElement("div");

  el.innerHTML = text;

  return el;
}

export function getMouseInit(startRect: { left: number, top: number}, offsetRect: { left: number, top: number}) {
  return {
    buttons: 1,
    screenX: startRect.left + offsetRect.left,
    screenY: startRect.top + offsetRect.top,
    clientX: startRect.left + offsetRect.left,
    clientY: startRect.top + offsetRect.top,
    offsetX: offsetRect.left,
    offsetY: offsetRect.top,
    bubbles: true,
    cancelable: true,
  };
}
export function dispatchDrag(
  target: HTMLElement,
  from: { left: number, top: number},
  to: { left: number, top: number},
  options: { duration: number, interval: number },
) {
  const startRect = target.getBoundingClientRect();
  const mousedown = new MouseEvent("mousedown", getMouseInit(startRect, from));
  target.dispatchEvent(mousedown);

  const count = Math.floor(options.duration / options.interval);
  for (let i = 1; i <= count; ++i) {
    dispatchMouseMove(target, getMouseInit(startRect, {
      left: from.left + (to.left - from.left) / count * i,
      top: from.top + (to.top - from.top) / count * i,
    }), options.interval * i);
  }
  return new Promise<void>(resolve => {
    setTimeout(() => {
      const mosueup = new MouseEvent("mouseup", getMouseInit(startRect, to));

      target.dispatchEvent(mosueup);
      resolve();
    }, options.duration);
  });
}

export async function dispatchMouseMove(target: HTMLElement, moustInit: any, time: number) {
  setTimeout(() => {
    const mousemove = new MouseEvent("mousemove", moustInit);

    target.dispatchEvent(mousemove);
  }, time);
}

export async function dispatchWheel(
  target: HTMLElement,
  direction: string,
  value: number,
  options: { duration: number; interval: number }
) {
  const count = Math.floor(options.duration / options.interval);
  for (let i = 1; i <= count; ++i) {
    const wheelEvent = new WheelEvent(
      "wheel",
      direction === "horizontal"
        ? { deltaX: value / count }
        : { deltaY: value / count }
    );
    target.dispatchEvent(wheelEvent);
    await waitFor(options.interval);
  }
}
