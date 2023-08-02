import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../firebase";
function Home() {


  // useEffect(()=>{
  //   firestore.collection('posts').get().then((snapshot)=>{
  //     const posts=snapshot.docs.map((doc)=>{
  //       return {
  //         id:doc.id,
  //         ...doc.data()
  //       };
  //     });
  //     console.log('postsfdsa',posts);
  //     setPost(posts);
  //   });

  // },[]);
  useEffect(()=>{
    firestore.collection('posts').onSnapshot((snapshot)=>{
      const posts=snapshot.docs.map((doc)=>{
        return {
          id:doc.id,
          ...doc.data()
        };
      });
      console.log('postsfdsa',posts);
      setPost(posts);
    });

  },[]);

  const [posts,setPost]=useState([]);
    return (
      <div className="home">
      <h1>Tech Blog</h1>
      <div id="blog-by">Akash</div>

      {posts.map((post,index)=>{
        
      return(
      
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
          {/* {console.log("Fdsfsdaf",post.id)} */}
            <h3>{post.title}</h3>
          </Link>
          <p>{post.subtitle}</p>
        </div>
      )
        
        
      })}
      </div>
    );
  }
  export default Home;