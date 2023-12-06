import { Card } from '@mui/material';
import React, { useState, useEffect } from 'react';

const WordPressFag = () => {
  const [fags, setFags] = useState([]);

  useEffect(() => {
    const fetchFags = async () => {
      try {
        const response = await fetch('https://www.wordpress.vicw.dk/wp-json/wp/v2/posts?_embed&categories=3');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setFags(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
 
    fetchFags();
  }, []);

  return (
    <Card
    sx={{
        width: "100%",
        padding: 20,
      }}
    >
      {fags.map(fag => (
        <div key={fag.id} className="mui-card">
          <h2>{fag.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: fag.content.rendered }} />
        </div>
      ))}
    </Card>
  );
};

export default WordPressFag;
