import { useState } from "react";
import "./count.css";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="himanshu">
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>

      <div>
        <p>{count}</p>
      </div>

      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default Counter;
