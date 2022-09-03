import { blog, blogDetail } from "../modeles/blog"


export const BLOG_ADD='BLOG_ADD'
export const BLOG_ADDED='BLOG_ADDED'
export const BLOG_DELETE='BLOG_DELETE'
export const BLOG_DELETED='BLOG_DELETED'
export const BLOG_EDIT='BLOG_EDIT'
export const BLOG_EDITED='BLOG_EDITED'
export const BLOGS_FETCH='BLOGS_FECH'
export const BLOGS_FETCHED='BLOGS_FECHED'



export const blogAddAction = (blog:blogDetail)=>{
return {type:BLOG_ADD, payload:blog}
}
export const blogAddedAction = ()=>{
  return {type:BLOG_ADDED }
}
export const blogDeleteAction = (id:string)=>{
    return {type:BLOG_DELETE, payload:id}
}
export const blogDeletedAction = ()=>{
  return {type:BLOG_DELETED}
}

 export const blogEditAction = (blog:blogDetail, id:string)=>{
  return {type:BLOG_EDIT, payload:{blog,id}}
  }

  export const blogEditedAction = ()=>{
    return {type:BLOG_EDITED }
    }


export const blogsFetchAction=()=>{
return {type:BLOGS_FETCH}
}
export const blogsFetchedAction=(blogs:blog[])=>{
  return {type:BLOGS_FETCHED, payload:blogs}
  }

