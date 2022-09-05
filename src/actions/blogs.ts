import {alert, blog, blogDetail } from "../modeles/blogs"

export const BLOG_ADD='BLOG_ADD'
export const BLOG_ADDED='BLOG_ADDED'
export const BLOG_DELETE='BLOG_DELETE'
export const BLOG_DELETED='BLOG_DELETED'
export const BLOG_EDIT='BLOG_EDIT'
export const BLOG_EDITED='BLOG_EDITED'
export const BLOGS_FETCH='BLOGS_FECH'
export const BLOGS_FETCHED='BLOGS_FECHED'
export const ALERT_REMOVE='ALERT_REMOVE'

export const blogAddAction = (blog:blogDetail,ADELoading:boolean,alertId:string)=>{
return {type:BLOG_ADD, payload:{blog,loading:true,ADELoading,alertId}}
}
export const blogAddedAction = (ADELoading:boolean,alertId:string)=>{
  return {type:BLOG_ADDED,payload:{loading:false,ADELoading:!ADELoading,alert:{message:'sucessfully Added',alertId}} }
}
export const blogDeleteAction = (id:string,ADELoading:boolean,alertId:string)=>{
    return {type:BLOG_DELETE, payload:{id,loading:true,ADELoading,alertId}}
}
export const blogDeletedAction = (ADELoading:boolean,alertId:string)=>{
  return {type:BLOG_DELETED,
    payload:{loading:false,ADELoading:!ADELoading,alert:{message:'sucessfully deleted',alertId}}}
}

 export const blogEditAction = (blog:blogDetail, id:string,ADELoading:boolean,alertId:string)=>{
  return {
    type:BLOG_EDIT,
     payload:{
      blog:{title:blog.title,date:blog.date,_id:id,image:blog.image, content:blog.content},
      loading:true,
      ADELoading,
      alertId
    }
    }
  }

  export const blogEditedAction = (ADELoading:boolean,alertId:string)=>{
    return {type:BLOG_EDITED, payload:{loading:false,ADELoading:!ADELoading,alert:{message:'sucessfully edited',alertId}} }
    }


export const blogsFetchAction=(loading=true)=>{
return {type:BLOGS_FETCH,payload:loading}
}
export const blogsFetchedAction=(blogs:blog[])=>{
  return {type:BLOGS_FETCHED, payload:{blogs,loading:false}}
  }

export const removeAlertAction=(newalerts:alert[])=>{
  return {type:ALERT_REMOVE,payload:newalerts}
}