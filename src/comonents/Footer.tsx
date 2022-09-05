import { FC, memo } from "react";
import { GrAdd } from 'react-icons/gr';
type FooterProps = {
    addClick:()=>void
};

const Footer: FC<FooterProps> = ({addClick}) => {
  return <div className="flex bg-indigo-500 py-2 justify-center  pr-6 items-center rounded-md shadow-md">
    <GrAdd onClick={addClick}  className="bg-yellow-500 w-12 h-12 p-1 rounded-full hover:bg-gray-300" title="add blog" />
  </div>
};

Footer.defaultProps = {};

export default memo(Footer);