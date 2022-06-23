type CounterType = {
  counter: number;
};
export const fetchCounter = async (): Promise<CounterType> => {
  //Mock API
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({
        counter: 12,
      });
    }, 3000);
  });
};
