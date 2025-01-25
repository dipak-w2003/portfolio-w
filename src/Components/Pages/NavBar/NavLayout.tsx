import { ReactNode } from "react";
import NavBar from "./NavBar";
interface IProps {
  children?: ReactNode;
}
const NavLayout = (props: IProps) => {
  return (
    <div>
      <NavBar />
      <div>{props.children}</div>
    </div>
  );
};

export default NavLayout;
