import { NavBar } from "NavBar";

export const Layout = ({
  children,
  isHiddenButton = false,
  edit,
  isSticky = true,
}) => {
  return (
    <div>
      <NavBar isHiddenButton={isHiddenButton} edit={edit} isSticky={isSticky} />
      <main>{children}</main>
    </div>
  );
};
