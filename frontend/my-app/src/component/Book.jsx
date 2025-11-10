import React from "react";
import "./Book.css";

function Book(probs) {
  const [count, setCount] = React.useState(0);
  function inc() {
    if (count == 10) {
      alert("hhh");
    } else {
      setCount(count + 1);
    }
  }
  function dec() {
    if (count == -10) {
      alert("hhh");
    } else {
      setCount(count - 1);
    }
  }
  return (
    <div id="book">
      <img
        src="https://imgs.search.brave.com/qB1JRAkyUx8CqLyTkWnUHqPklodjQOmI7zM1VDT7sTM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvaXNvbGF0ZWQt/bWF0aC1ib29rLXdp/dGgtcGVuY2lsLWZv/cm11bGFzLW1hdGgt/Y2xhc3MtY29uY2Vw/dC12ZWN0b3ItaWxs/dXN0cmF0aW9uXzEx/MjAxOC0xNzk2Lmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDA"
        alt=""
        height={100}
        width={100}
      />
      <h1>{probs.title}</h1>
      <h1>{probs.price}</h1>
      <div>
        <button onClick={inc}>+</button>
        <span>{count}</span>
        <button onClick={dec}>-</button>
      </div>
    </div>
  );
}

export default Book;