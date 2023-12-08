import { Card, Stack, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

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
    <Stack
    >
      {post && (
        <Card className="mui-card">
          <Typography variant="h2">{post.title.rendered}</Typography>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </Card>
      )}
    </Stack>
  );
};

export default WordPressFag;
