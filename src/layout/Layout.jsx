import { NavBar } from "NavBar";

export const Layout = ({
  children,
  isHiddenButton = false,
  edit,
  isSticky = true,
  isDisplay = false,
}) => {
  return (
    <div>
      <NavBar
        isHiddenButton={isHiddenButton}
        edit={edit}
        isSticky={isSticky}
        isDisplay={isDisplay}
      />
      <main>{children}</main>
    </div>
  );
};
