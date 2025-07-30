import { useEffect, useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // websockets connections
    // settimeout
    // setinterval
    // event listeners
    console.log('count value is mounted!');

    // const mouseListener = (event) => {
    //   console.log('mouse is moving', event.x, event.y);
    // }
    // document.addEventListener('mousemove', mouseListener);

    return () => {
      // disposal function
      // qui fai..clean up
      // close websockets connections
      // remove event listeners
      console.log('Oh nooo, count is unmounted 😣');
      // document.removeEventListener('mousemove', mouseListener);
    }
  }, []);

  useEffect(() => {
    console.log('count value is updating!', count);
    return () => {
      console.log('prev count value', count);
    }
  }, [count]);

  return (
    <article>
      <button onClick={() => setCount(count + 1)}>counting: {count}</button>
    </article>
  );
}

export default Count;
