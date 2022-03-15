import React from "react";

function App() {
  return (
    <div className="App">
      Hello React
    </div>
  );
}

const result = React.createElement('h1', {key: 'abc'}, 'Hello World');
console.log(result);

export default App;
