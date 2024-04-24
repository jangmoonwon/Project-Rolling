import { NavBar } from "NavBar";

export const Layout = ({
  children,
  isHiddenButton = false,
  edit,
  isSticky = false,
  isDisplay = false,
}) => {
  const style = {
    display: "flex",
	flexDirection: "column",
	height: "100vh",
  };
  return (
    <div>
      <NavBar
        isHiddenButton={isHiddenButton}
        edit={edit}
        isSticky={isSticky}
        isDisplay={isDisplay}
      />
      <main style={style}>{children}</main>
    </div>
  );
};
