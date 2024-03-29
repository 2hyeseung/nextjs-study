import { useState } from "react";
import NavBar from "../components/NavBar";

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <NavBar></NavBar>
      <h1>Hello {counter}</h1>
      {/* hydration */}
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
    </div>
  );
}
