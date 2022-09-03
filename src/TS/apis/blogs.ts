import axios from "axios"
import { blog, blogDetail } from "../modeles/blog"
const BASE_API='https://crudcrud.com/api/8840ea18a4914713914e0bb8eb363a6f/'
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

export const editBlog =async(blog:blogDetail, id:string)=>{
    const response= await axios.put<blog>(BASE_API+'blogs/'+id,
    blog
    )
    return response.data
}

export const deleteBlog =async(id:string)=>{
    const response= await axios.delete(BASE_API+'blogs/'+id)
   
}

