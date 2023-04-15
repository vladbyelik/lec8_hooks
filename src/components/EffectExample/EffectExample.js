import React, { useEffect, useState } from 'react';

const EffectExample = () => {

  const [dataList, setDataList] = useState(null);

  const [state1, setState1] = useState(true);
  const [state2, setState2] = useState(true);

  useEffect(() => {
    // componentDidMount
    // componentDidUpdate

    const url = 'https://jsonplaceholder.typicode.com/todos/';

    fetch(url)
      .then(res => res.json())
      .then(res => {
        setDataList(res);
      })
      .catch(error => console.log(error));

  }, [state1, state2]);

  useEffect(() => {
    // componentWillUnmount

    return () => {
      console.log('Bye!');
    }
  });

  const handleChangeState = () => {
    setState1(!state1);
  }

  const handleChangeState2 = () => {
    setState2(!state2);
  }

  return (
    <div>
      EffectExample

      <button onClick={handleChangeState}>
        Change state 1
      </button>

      <button onClick={handleChangeState2}>
        Change state 2
      </button>
    </div>
  )
}

export default EffectExample;