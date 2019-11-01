import React from 'react';
import './App.css';
import { Hello } from "./components/Hello";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Learning React</h1>
      <Hello compiler="TypeScript" framework="React" />
    </div>
  );
}

export default App;
