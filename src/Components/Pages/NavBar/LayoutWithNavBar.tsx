import { ReactNode } from "react";
import NavBar from "./NavBar";
interface IProps {
  children?: ReactNode;
}
const LayOutWithNavBar = (props: IProps) => {
  return (
    <div className="flex flex-col relative">
      <NavBar />
      <section className="">{props.children}</section>
    </div>
  );
};

export default LayOutWithNavBar;
