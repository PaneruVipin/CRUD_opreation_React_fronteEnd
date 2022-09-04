
import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { blogsFetchAction} from "../../TS/actions/blogs";
import { blog } from "../../TS/modeles/blog";
import { ADELoadingSelector, blogsStateSelector, loadingSelector,  } from "../../TS/seectors/blogs";
import { State } from "../../TS/store";
import BlogRow from "./BlogRow";

type BlogsPageProps = {
    blogs:blog[]
    blogsFetch:()=>void
    ADELoading:boolean
    loading:boolean
};

const BlogsPage: FC<BlogsPageProps> = ({blogs,blogsFetch,ADELoading,loading,...props}) => {
  useEffect(()=>{
    console.log('useState run')
   blogsFetch()
  },[ADELoading])
  const filteredBlogs=blogs.reverse().slice(0,4)
  console.log(blogs)
  return <div className="md:px-20 py-10 px-2 ">
{
filteredBlogs.map((b)=><BlogRow key={b._id} blog={b}/>)
}
  </div>;
};

BlogsPage.defaultProps = {};
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

export default connect(mapStateToProps, mapDispatchToProps)(memo(BlogsPage));