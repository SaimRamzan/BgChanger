import { useState } from "react";

function App() {
  const [color, setcolor] = useState("grey");
  return (
    <div className="main-div " style={{ backgroundColor: color }}>
      <div className="box">
        <div className="childbox">
          <button
            style={{ backgroundColor: "Red" }}
            onClick={() => setcolor("red")}
          >
            Red
          </button>
          <button
            style={{ backgroundColor: "Green" }}
            onClick={() => setcolor("Green")}
          >
            Green
          </button>
          <button
            style={{ backgroundColor: "BLUE" }}
            onClick={() => setcolor("Blue")}
          >
            Blue
          </button>
          <button
            style={{ backgroundColor: "grey" }}
            onClick={() => setcolor("Grey")}
          >
            Grey
          </button>
          <button
            style={{ backgroundColor: "pink" }}
            onClick={() => setcolor("pink")}
          >
            Pink
          </button>
          <button
            style={{ backgroundColor: "yellow" }}
            onClick={() => setcolor("yellow")}
          >
            Yellow
          </button>
          <button
            style={{ backgroundColor: "Purple" }}
            onClick={() => setcolor("Purple")}
          >
            Purple
          </button>
          <button
            style={{ backgroundColor: "Black" }}
            onClick={() => setcolor("Black")}
          >
            Black
          </button>
          <button
            style={{ backgroundColor: "Olive" }}
            onClick={() => setcolor("Olive")}
          >
            Olive
          </button>
          <button
            style={{ backgroundColor: "blue" }}
            onClick={() => setcolor("blur")}
          >
            Olive
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
