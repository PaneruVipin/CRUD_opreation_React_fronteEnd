import { Form, Formik } from "formik";
import { FC, memo } from "react";
import { object, string } from "yup";
import { blog, blogDetail } from "../../TS/modeles/blog";
import Button from "../Basics/Button";
import Input from "../Basics/Input";

type CreatePostProps = {
    cancelclick:()=>void
    intialValues:blogDetail
    blogAdd?:(blog:blogDetail)=>void
    blogEdit?:(blog:blogDetail)=>void
};

const CreatePost: FC<CreatePostProps> = ({cancelclick,intialValues,blogAdd,blogEdit,...props}) => {
    const onSubmit=(data:any)=>{
      console.log('submitdata',data)
        if(blogAdd){
            blogAdd(data)
        }
        if(blogEdit ){
            blogEdit(data,)
        }
        cancelclick()
    }
   const validationSchema=object().shape({
     title:string().required(),
     image:string().required().url(),
     content:string().required()

   })
   const initialValues={
   title:intialValues.title,
   image:intialValues.image,
   date:intialValues.date,
   content:intialValues.content
   }
  return <Formik onSubmit={onSubmit} validationSchema={validationSchema} initialValues={initialValues}>
    <Form >
    <div className=" md:px-60 px-4 fixed inset-0 py-20 z-10">
     <div className=" rounded-md shadow-md shadow-md space-y-0 p-4 md:space-y-6 bg-yellow-500 h-full  overflow-y-scroll">
    <Input id="title" name="title" placeholder=" enter your blog title"/>
    <Input id="image" name="image" placeholder="enter image link"/>
    <Input id="content" name="content" placeholder=" enter desription"/>
    <Input id="date" name="date" type='date' />
    <div className="flex gap-x-4">
    <Button  type="submit">Upload</Button>
    <Button theme="secondry" onClick={cancelclick} type="button">Cancel</Button>
    </div>
    </div>
    </div>
    </Form>
  </Formik>
};

CreatePost.defaultProps = {};


export default (memo(CreatePost));