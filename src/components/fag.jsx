// lavet af Rina

import {  Typography } from '@mui/material';
import { useState, useEffect } from 'react';

const WordPressFag = ({ postId }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://www.wordpress.vicw.dk/wp-json/wp/v2/posts/${postId}?_embed`);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
 
    fetchPost();
  }, [postId]);

  return (
    <main
    >
      {post && (
        <div         >
          <Typography variant="h3"
          sx={{
            textAlign: 'center'
          }} >
            {post.title.rendered}
            </Typography>
          <Typography dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      )}
    </main>
  );
};

export default WordPressFag;
