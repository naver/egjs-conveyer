import React, { useRef } from 'react';
import './App.css';
import { useConveyer } from './react-conveyer/useConveyer';

function App() {
  const ref = useRef<HTMLElement>(null)  as any as ((e: HTMLElement | null) => void) & { current: HTMLElement | null };
  const {
    isReachStart,
    isReachEnd,
    scrollIntoView,
    onBeginScroll,
    onFinishScroll,
  } = useConveyer(ref, {
    preventClickOnDrag: true,
    horizontal: false,
  });

  onBeginScroll(() => {
    console.log("begin scroll");
  }, []);
  onFinishScroll(() => {
    console.log("finish scroll");
  }, []);

  return (
    <div className="App">
      <button id="prev" disabled={isReachStart} onClick={() => {
        // start to end
        scrollIntoView("start", {
          align: "end",
          duration: 500,
        });
      }}>PREV</button>
      <button id="next" disabled={isReachEnd} onClick={() => {
        // end to start
        scrollIntoView("end", {
          align: "start",
          duration: 500,
        });
      }}>NEXT</button>
      <div className="items" ref={ref}>
        <div className="item"><a href="#1">1</a></div>
        <div className="item"><a href="#2">2</a></div>
        <div className="item"><a href="#3">3</a></div>
        <div className="item"><a href="#4">4</a></div>
        <div className="item"><a href="#5">5</a></div>
        <div className="item"><a href="#6">6</a></div>
        <div className="item"><a href="#7">7</a></div>
        <div className="item"><a href="#8">8</a></div>
        <div className="item"><a href="#9">9</a></div>
        <div className="item"><a href="#10">10</a></div>
        <div className="item"><a href="#11">11</a></div>
        <div className="item"><a href="#12">12</a></div>
      </div>
    </div>
  );
}

export default App;
