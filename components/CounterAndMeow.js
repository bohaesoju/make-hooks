import { useState } from "../core/MyReact";

export function CounterAndMeow () {
  const [count, setCount] = useState(1);
  const [cat, setCat] = useState('야옹! ');

  function countMeow (newCount) {
    setCount(newCount);
    // .repeat 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새롱누 문자열을 반환
    setCat('야옹! '.repeat(newCount))
  }

  window.increment = () => countMeow(count + 1);
  window.decrement = () => countMeow(count - 1);

  return `
    <div>
      <p>고양이가 ${count}번 울어서 ${cat}</p>
      <button onclick="increment()">증가</button>
      <button onclick="decrement()">감소</button>
    </div>
  `;
}