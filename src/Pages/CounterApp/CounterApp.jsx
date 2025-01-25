import React, { useState } from "react";
import Header from "../../Components/Header/Header";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className=" w-full bg-[#111a38] overflow-hidden">
      <Header />
      <div className="h-full flex items-center justify-between gap-6 flex-col-reverse lg:flex-row mt-8 lg:mt-0">
        <div className="lg:w-1/4 bg-white h-full px-5 py-2">
          <h1 className="text-4xl text-center font-semibold mb-1">
            COUNTER APP
          </h1>
          <p>
          The Counter App is a simple yet functional React project designed to help users increment, decrement, and reset a numerical value. This app serves as an excellent demonstration of foundational React concepts.
          </p>
          <p className="font-semibold border-b-2">The Counter App allows users to 
          </p>
          <li>Increase the counter by clicking the “Increase” button.</li>
          <li>Decrease the counter by clicking the “Decrease” button.</li>
          <li>Reset the counter back to it's initial value “Reset” button.</li>
          <h3 className="font-semibold border-b-2">React Topics and Functions used</h3>
          <li><strong>useState Hook</strong>: to manage and update the state of the counter value dynamically.</li>
          <li><strong>Event Handling</strong>:To trigger actions (increment, decrement, reset) based on button clicks.</li>
          <li><strong>Props (Optional)</strong>: If the app allows customization, props are passed to make the counter dynamic.
          </li>
          <p>This project not only solidified my grasp of React fundamentals but also laid the groundwork for tackling more advanced concepts in future projects. It's a great starting point for anyone looking to explore the power of React!</p>
        </div>
        <div className="lg:w-3/4 lg:h-[70vh] flex items-center justify-center px-10 w-full">
          <div className="w-[100%] h-[80%] border-2 bg-white rounded-lg flex items-center justify-center flex-col gap-10 py-6">
            <p className="text-[6rem]">{count}</p>
            <div className="flex gap-4 flex-wrap justify-center" >
              <button className="border-2 bg-green-500 px-12 py-2 rounded-2xl text-white font-semibold text-xl hover:bg-green-800" onClick={increase}>
                +
              </button>
              <button className="border-2 bg-[#111a38] px-12 py-2 rounded-2xl text-white font-semibold text-xl hover:bg-slate-950" onClick={reset}>
                Reset
              </button>
              <button className="border-2 bg-red-500 px-12 py-2 rounded-2xl text-white font-semibold text-xl  hover:bg-red-800" onClick={decrease}>
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
