import React from "react";
import NavBar from "./Components/Utils/1-navbar/NavBar";
import DraggableComponent from "./Components/Utils/1-navbar/DragMe";
const App = () => {
  return (
    <div className="h-[100vh] bg-black overflow-hidden">
      <DraggableComponent>
        <NavBar />
      </DraggableComponent>
    </div>
  );
};

export default App;
