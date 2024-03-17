import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../data/blogData.json'; // Example JSON data

const BlogPost = () => {

  return(
    <> 
      <ul>
      {blogData.map((blog,index)=>(
          <li key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.preview}</p>
        </li>
      ))}
       
      </ul>
       </>
    )

}

export default BlogPost;
