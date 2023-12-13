import { useState, useEffect } from 'react';
import axios from 'axios'; 
import { Card, Stack, Typography, Button, IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const Dagligdag = () => {
  const [posts, setPosts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Fetch posts from WordPress API
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://www.wordpress.vicw.dk/wp-json/wp/v2/posts?categories=22&_embed');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };    

    fetchPosts();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === posts.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? posts.length - 1 : prevSlide - 1));
  };

  

  return (
    <Stack className="dagligdag-slider">
      {posts.length > 0 && (
        <Card className="slide">
                    <div className="arrows">
            <IconButton onClick={prevSlide} className="arrow left-arrow">
              <NavigateBeforeIcon 
              sx={{
                position: 'static',
                justifyContent: 'flex-start',
              }}
              />
            </IconButton> 
            </div>
            <div className="content">
            <Typography variant="h4" dangerouslySetInnerHTML={{ __html: posts[currentSlide].title.rendered }} />
            <Typography variant="body1" dangerouslySetInnerHTML={{ __html: posts[currentSlide].excerpt.rendered }} />
            
            {posts[currentSlide]?._embedded?.['wp:featuredmedia'] && (
              <img
                src={posts[currentSlide]._embedded['wp:featuredmedia'][0].source_url}
                alt={posts[currentSlide].title.rendered}
              />           
            )}

          </div>
          <div className="arrows">
            <IconButton onClick={nextSlide} className="arrow right-arrow">
              <NavigateNextIcon 
                      sx={{
                        position: 'static',
                        justifyContent: 'flex-start',
                      }}
              />
            </IconButton>
          </div>
        </Card>
      )}
    </Stack>
  );
};

export default Dagligdag;
