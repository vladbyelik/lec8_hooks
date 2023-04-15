import React, { useState } from 'react';

const StateExample = () => {

  const [state, setState] = useState(1);

  const [data, setData] = useState({
    data1: 'data1',
    data2: 'data2',
    data3: 'data3',
  });


  const handleIncrement = () => {
    setState(state + 1);
  }

  const handleDecrement = () => {
    setState((prevState) => {
      return prevState - 1
    })
  }

  const changeData = () => {
    setData({
      ...data,
      data2: 'data2 Changed!'
    })
  }

  return (
    <div>
      <h5>StateExample</h5>

      <button onClick={handleDecrement}>-</button>
      <h5>{state}</h5>
      <button onClick={handleIncrement}>+</button>

      <button onClick={changeData}>
        Change
      </button>
    </div>
  )
};

export default StateExample;
