import React, {useState, useEffect, useRef} from 'react';
import BaseLayout from './_Layout/BaseLayout';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import './pageStyle.css';



const Home=()=>{
    const  [posts, setPosts] = useState([]);
    const [offset, setOffset] = useState(8);
    const lRef=useRef(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(res => res.json())
          .then(
            (result) => {
              setPosts(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              console.error(error);
            }
          )
      }, [])

      useEffect(() => {
        smoothScrooll();
      }, [offset]);

      const smoothScrooll = ()=>{
        lRef.current.scrollIntoView({behavior:"smooth", block:"end"});
        return;
        const smSc=document.querySelector("#moreButton");
        smSc.scrollIntoView({
          behavior:"smooth",
          block:"center"

        })
      }

      const loadMoreHandler=()=>{
        setOffset(offset + 4);
      }
    return(
         <BaseLayout>
            <div className="page-content-container">
              {/*<h1>Content Home page</h1>
                 <h2>{JSON.stringify(posts)}</h2>*/}
                 <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Card>
                        <h1>Home page</h1>
                      </Card>  
                    </Grid>
                    {posts.slice(0, offset).map((post, index)=>(
                      <Grid item xs={3} key={post.id}>
                        <Card style={{height:250}}>
                            <CardHeader title={post.title}/>
                            <CardContent>{post.body}</CardContent>
                          </Card>
                      </Grid>    
                        ))}
                    
                 </Grid>

                 <Grid container spacing={3} justify="center">
                   <Button onClick={loadMoreHandler} id="moreButton" ref={lRef}>
                     <p style={{FontSize:22,color:"white"}}>Load More...</p>
                   </Button>


                 </Grid>
                </div>

        </BaseLayout>
        
    );
};

export default Home;