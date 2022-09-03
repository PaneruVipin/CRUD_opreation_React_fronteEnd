import axios from "axios"
import { blog } from "../modeles/blog"
const BASE_API='https://crudcrud.com/api/e6e83bfd94c447a2827bd57863ba24c8/'
export  const getBlogs= async() =>{
    const response= await axios.get<blog[]>(BASE_API+'blogs')
    return response.data
  }

export const addBlog =async(blog:blog)=>{
    const response= await axios.post<blog>(BASE_API+'blogs',
    blog
    )
    return response.data
}

export const editBlog =async(blog:blog, id:string)=>{
    const response= await axios.put<blog>(BASE_API+'blogs/'+id,
    blog
    )
    return response.data
}

export const deleteBlog =async(id:string)=>{
    const response= await axios.delete(BASE_API+'blogs/'+id)
   
}

