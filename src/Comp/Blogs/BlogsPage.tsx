
import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { blogsFetchAction} from "../../TS/actions/blogs";
import { blog } from "../../TS/modeles/blog";
import { anyAttemptSelector, blogsStateSelector, loadingSelector,  } from "../../TS/seectors/blogs";
import { State } from "../../TS/store";
import BlogRow from "./BlogRow";

type BlogsPageProps = {
    blogs:blog[]
    blogsFetch:()=>void
    anyAttempt:boolean
    loading:boolean
};

const BlogsPage: FC<BlogsPageProps> = ({blogs,blogsFetch,anyAttempt,loading,...props}) => {
  useEffect(()=>{
   blogsFetch()
  },[anyAttempt,loading])
  const filteredBlogs=blogs.reverse().slice(0,4)
  return <div className="px-20 py-10">
{
filteredBlogs.map((b)=><BlogRow key={b._id} blog={b}/>)
}
  </div>;
};

BlogsPage.defaultProps = {};
const mapStateToProps=(s:State)=>{
  return {
    blogs:blogsStateSelector(s),
    anyAttempt:anyAttemptSelector(s),
    loading:loadingSelector(s)
  }
}
const mapDispatchToProps={
  blogsFetch:blogsFetchAction
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(BlogsPage));