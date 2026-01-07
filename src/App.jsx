import "./App.css";

import hexaColor from "../generator.js";

function App() {
  const colors = Array.from({ length: 5 }, () => hexaColor());

  return (
    <div>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{ background: color, padding: "20px", margin: "10px" }}
        >
          {color}
        </div>
      ))}
    </div>
  );
}

export default App;
