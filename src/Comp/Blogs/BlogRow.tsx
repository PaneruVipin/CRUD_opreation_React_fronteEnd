import { FC, memo, useState } from "react";
import { blog } from "../../TS/modeles/blog";

type BlogRowProps = {
  blog:blog
};

const BlogRow: FC<BlogRowProps> = ({blog}) => {
  
  const [toggleEdit,setToggleEdit]=useState(false)
  

  
   
return (
    <div className="flex justify-between p-4 space-y-2 rounded-md shadow-md ">
    <img src={blog.image} className='w-64 h-64'/>
   <div>
     <h2 className="font-bold txt-2xl space-y-6">{blog.title}</h2>
     <span className="ml-10">{blog.date}</span>
     <p>{blog.content}</p>
    </div>
 </div>
);
};

BlogRow.defaultProps = {};


export default (memo(BlogRow));