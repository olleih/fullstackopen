import { useState } from "react";
import Statistics from "./Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [total, setTotal] = useState(0);

  let positive;
  positive = (good / total) * 100;
  let average;
  average = (good * 1 + bad * -1) / total;

  return (
    <>
      <h1>give feedback</h1>
      <button
        onClick={() => {
          setGood(good + 1);
          setTotal(total + 1);
        }}
      >
        good
      </button>
      <button
        onClick={() => {
          setNeutral(neutral + 1);
          setTotal(total + 1);
        }}
      >
        neutral
      </button>
      <button
        onClick={() => {
          setBad(bad + 1);
          setTotal(total + 1);
        }}
      >
        bad
      </button>
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        average={average}
        positive={positive}
        total={total}
      ></Statistics>
    </>
  );
};

export default App;
