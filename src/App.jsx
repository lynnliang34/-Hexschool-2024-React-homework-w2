import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <button type="button" className="btn btn-primary">
      Test
    </button>
  );
}

export default App;
