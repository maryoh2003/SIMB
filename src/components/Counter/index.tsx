import useCounter from "./useCounter";

const Counter = () => {
  const { counter, increase, decrease } = useCounter();
  return (
    <div>
      <button onClick={increase}>+</button>
      {counter}
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default Counter;
