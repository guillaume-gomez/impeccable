import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import CardRendering from "./components/2dCardRendering";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col gap-5">
      <h1>Vite + React</h1>
      <CardRendering  />
    </div>
  )
}

export default App
