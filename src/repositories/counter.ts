type CounterType = {
  counter: number;
}
export const fetchCounter = async (): Promise<CounterType> => {
  /*
  const response = await fetch("http://server-address.com", {
    method: "GET",  
  });
  const data = await response.json();

  * data will be 
  * {
  *   "counter": 10
  * }
    return data;
  */

  //Mock API
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({
        counter: 12,
      });
    }, 3000);
  });
};