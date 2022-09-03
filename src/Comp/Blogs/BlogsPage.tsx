
import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { blogsFetchAction} from "../../TS/actions/blogs";
import { blog } from "../../TS/modeles/blog";
import { blogsStateSelector } from "../../TS/seectors/blogs";
import { State } from "../../TS/store";
import BlogRow from "./BlogRow";

type BlogsPageProps = {
    blogs:blog[]
    blogsFetch:()=>void
};

const BlogsPage: FC<BlogsPageProps> = ({blogs,blogsFetch,...props}) => {
  useEffect(()=>{
   blogsFetch()
  },[])
  console.log('pgedata',blogs)
  return <div className="px-20 py-10">
{
blogs.map((b)=><BlogRow key={b._id} blog={b}/>)
}
  </div>;
};

BlogsPage.defaultProps = {};
const mapStateToProps=(s:State)=>{
  return {
    blogs:blogsStateSelector(s)
  }
}
const mapDispatchToProps={
  blogsFetch:blogsFetchAction
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(BlogsPage));