import StatisticLine from "./StatisticLine";

const Statistics = ({ good, bad, neutral, average, positive, total }) => {
  const isStats = total !== 0;

  return (
    <>
      <h1>stats</h1>
      {isStats ? (
        <>
          <StatisticLine text={"Good"} value={good} />
          <StatisticLine text={"Neutral"} value={neutral} />
          <StatisticLine text={"Bad"} value={bad} />
          <StatisticLine text={"Average"} value={average} />
          <StatisticLine text={"Positive"} value={positive} /> 
        </>
      ) : (
        <>
          <p>No stats</p>
        </>
      )}
    </>
  );
};

export default Statistics;
