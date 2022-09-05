import { FC, memo } from "react";

type HeaderProps = {};

const Header: FC<HeaderProps> = ({...props}) => {
  return <div className="bg-indigo-500 p-2 pl-10 rounded-md shadow-md">
   <h1 className="font-bold text-2xl">PaneruVipin<br/>Blogs</h1>
  </div>
};

Header.defaultProps = {};

export default memo(Header);