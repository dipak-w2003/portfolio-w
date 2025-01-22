import React from "react";

export interface ITOGGLE {
  ToggleTorF: () => void;
}
const Toggle = () => {
  const [toggle, setToggle] = React.useState<boolean>(true);
  const setTrue = () => setToggle(true);
  const setFalse = () => setToggle(false);
  const setToggling = () => setToggle((prev) => (prev = !prev));
  return { toggle, setFalse, setTrue, setToggling };
};
export default Toggle;
