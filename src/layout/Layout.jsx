import { NavBar } from "NavBar";

export const Layout = ({ children, isHiddenButton = false, edit }) => {
  return (
    <div>
      <NavBar isHiddenButton={isHiddenButton} edit={edit} />
      <main>{children}</main>
    </div>
  );
};
