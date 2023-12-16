import React from 'react';
import Widget from './components/Widget.jsx'
import TextAreaWithCounter from './components/TextAreaWithCounter.jsx'

function App() {
  return (
    <div>
      <h1>Hello from App!</h1>
      
      <h2>Widget</h2>
      <Widget />
      
      <h2>TextAreaWithCounter</h2>
      <TextAreaWithCounter maxLength={150} />
    </div>
  );
}

export default App
