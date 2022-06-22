import { useEffect, useState } from "react"
import { fetchCounter } from "../../repositories/counter";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetchCounter().then((response) => {
      setCounter(response.counter);
    });
  }, []);

  const increase = () => {
    setCounter((prev) => prev + 1);
  }

  const decrease = () => {
    setCounter((prev) => prev - 1);
  }

  return {
    counter,
    increase,
    decrease
  }
}

export default useCounter;