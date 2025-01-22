import React, { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

// Register the Draggable plugin
gsap.registerPlugin(Draggable);

// Interface for props, which includes the children
interface IPROP {
  children: ReactNode;
}

// The main component with draggable functionality
const DraggableComponent: React.FC<IPROP> = ({ children }) => {
  // Ref for the draggable element
  const dragRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensuring dragRef.current is available
    if (dragRef.current) {
      // Initialize Draggable with configurations
      Draggable.create(dragRef.current, {
        // Enable dragging on both X and Y axes
        type: "x,y",
        onDrag: function (this: Draggable.Vars) {
          // Log the drag coordinates whenever the element is dragged
          console.log("Dragging... X:", this.x, "Y:", this.y);
        },
        onDragStart: function (this: Draggable.Vars) {
          // Log the initial drag position when dragging starts
          console.log("Drag started at X:", this.x, "Y:", this.y);
        },
        onDragEnd: function (this: Draggable.Vars) {
          // Log the final drag position when dragging ends
          console.log("Drag ended at X:", this.x, "Y:", this.y);
        },
        bounds: window,
        // Constrain the drag to the window bounds
      });
    }
  }, []);
  // Empty dependency array means this effect runs only once when the component mounts

  return (
    <div
      ref={dragRef}
      // Assign the ref to the div element for manipulation
      className="rounded-lg flex items-center justify-center cursor-pointer w-fit fixed "
    >
      {/* Render any children inside the draggable element */}
      {children}
    </div>
  );
};

export default DraggableComponent;
