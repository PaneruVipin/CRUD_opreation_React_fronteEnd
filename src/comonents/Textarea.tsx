import { useField } from "formik";
import { FC, memo, TextareaHTMLAttributes } from "react";

type TextareaProps = {
    name:string,
    label?:string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea: FC<TextareaProps> = ({name,label,id,rows,...props}) => {
    const [feild,meta]=useField(name)
  return <div className='space-y-2 md:flex gap-x-4'>
  <label className='font-bold text-xl md:w-40' htmlFor={id}>{label?label:name}</label>
  <div className='w-full'>
    <textarea
    {...props}
    {...feild}
      className=" form-control block w-full px-3 py-1.5text-base font-normal text-black bg-white bg-clip-padding
        border border-solid border-gray-300  rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      rows={rows}
      id={id}
      name={name}
    ></textarea>
     <div className='h-4'>
     { meta.error && meta.touched && <p className='text-red-500 font-bold'>{meta.error}</p>}
     </div>
    </div>
    </div>
 
};

Textarea.defaultProps = {};

export default memo(Textarea);