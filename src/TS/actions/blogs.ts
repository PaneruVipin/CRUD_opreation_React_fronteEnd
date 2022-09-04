import { blog, blogDetail } from "../modeles/blog"


export const BLOG_ADD='BLOG_ADD'
export const BLOG_ADDED='BLOG_ADDED'
export const BLOG_DELETE='BLOG_DELETE'
export const BLOG_DELETED='BLOG_DELETED'
export const BLOG_EDIT='BLOG_EDIT'
export const BLOG_EDITED='BLOG_EDITED'
export const BLOGS_FETCH='BLOGS_FECH'
export const BLOGS_FETCHED='BLOGS_FECHED'



export const blogAddAction = (blog:blogDetail,ADELoading:boolean,loading=true)=>{
return {type:BLOG_ADD, payload:{blog,loading,ADELoading}}
}
export const blogAddedAction = (ADELoading:boolean,loading=false)=>{
  return {type:BLOG_ADDED,payload:{loading,ADELoading:!ADELoading} }
}
export const blogDeleteAction = (id:string,ADELoading:boolean,loading=true)=>{
    return {type:BLOG_DELETE, payload:{id,loading,ADELoading}}
}
export const blogDeletedAction = (ADELoading:boolean,loading=false)=>{
  return {type:BLOG_DELETED,payload:{loading,ADELoading:!ADELoading}}
}

 export const blogEditAction = (blog:blogDetail, id:string,ADELoading:boolean,loading=true)=>{
  return {
    type:BLOG_EDIT,
     payload:{
      blog:{title:blog.title,date:blog.date,_id:id,image:blog.image, content:blog.content},
      loading,
      ADELoading
    }
    }
  }

  export const blogEditedAction = (ADELoading:boolean,loading=false)=>{
    return {type:BLOG_EDITED, payload:{loading,ADELoading:!ADELoading} }
    }


export const blogsFetchAction=(loading=true)=>{
return {type:BLOGS_FETCH,payload:loading}
}
export const blogsFetchedAction=(blogs:blog[],loading=false)=>{
  return {type:BLOGS_FETCHED, payload:{blogs,loading}}
  }

