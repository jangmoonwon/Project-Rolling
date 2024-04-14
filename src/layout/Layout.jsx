import { NavBar } from "NavBar";

export const Layout = ({ children, isHiddenButton = false }) => {
  return (
    <div>
      <NavBar isHiddenButton={isHiddenButton} />
      <main>{children}</main>
    </div>
  );
};
