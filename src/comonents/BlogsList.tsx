
import { FC, memo, useEffect, useState } from "react";
import { connect } from "react-redux";
import Loader from "./loader/Loader";
import { blogsFetchAction} from "../actions/blogs";
import { blog } from "../modeles/blogs";
import { ADELoadingSelector, blogsStateSelector, loadingSelector,  } from "../seectors/blogs";
import { State } from "../store";
import Button from "./Button";
import BlogRow from "./BlogRow";

type BlogsListProps = {
    blogs:blog[]
    blogsFetch:()=>void
    ADELoading:boolean
    loading:boolean
};

const BlogsList: FC<BlogsListProps> = ({blogs,blogsFetch,ADELoading,loading}) => {
  useEffect(()=>{
   blogsFetch()
  },[ADELoading])//ADE - ADDED DELETED EDITED 
  const [n,setN]=useState(5)
  const filteredBlogs=blogs.reverse().slice(0,n)
 
  return <div className="md:px-20 pt-10 pb-20 px-2 ">
    {
      loading && <Loader/>
    }
{
filteredBlogs.map((b)=><BlogRow key={b._id} blog={b}/>)
}
<div className="flex justify-center gap-x-4 mt-6">
{(blogs.length!>=n) &&<Button theme='secondry' onClick={()=>{setN(n+5)}}>See More....</Button>}
{
  (n>5 &&blogs.length>=5)&& <Button theme='secondry' onClick={()=>{n>=10?setN(n-5):setN(5)}}>See less....</Button>}
  </div>
  </div>;
};

BlogsList.defaultProps = {};
const mapStateToProps=(s:State)=>{
  return {
    blogs:blogsStateSelector(s),
    ADELoading:ADELoadingSelector(s),
    loading:loadingSelector(s)
  }
}
const mapDispatchToProps={
  blogsFetch:blogsFetchAction
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(BlogsList));
