 import { FC, memo } from "react";
 
 type ConfirmationProps = {
  buttonName?:string
  message:string
  cancelClick:()=>void
  confirmClck:()=>void
 };
 
 const Confirmation: FC<ConfirmationProps> = ({buttonName,message,cancelClick,confirmClck,...props}) => {
    return <div className=" md:px-80 md:py-40 px-4 fixed inset-0 z-20">
      <div className="bg-red-100 space-y-10 p-4 rounded-md shadow-md ">
    <div>{message}</div>
    <div className="flex justify-end ">
       <button onClick={cancelClick} className="font-bold">Cancel</button>
      <button onClick={confirmClck} className="text-red-500 font-bold ml-4">{buttonName}</button>
    </div>
    </div>
   </div>;
 };
 
 Confirmation.defaultProps = {
  buttonName:'Confirm'
 };
 
 export default memo(Confirmation);