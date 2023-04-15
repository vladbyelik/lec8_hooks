import React, { useMemo, useState } from 'react';

const computedFunc = (state) => {

  console.log('render!');

  for(let i = 0; i < 900000000; i++) {}

  return state * 2;
}

const MemoExample = () => {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(2);

  const computed = useMemo(
    () => computedFunc(count2), [count2] );


  return (
    <div>
      <h2>MemoExample</h2>

      <h3>{count}, {computed}</h3>

      <button onClick={() => setCount(count + 1)}>
        Click 1
      </button>

      <button onClick={() => setCount2(count2 + 1)}>
        Click 2
      </button>
    </div>
  )
}

export default MemoExample;