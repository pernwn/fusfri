// lavet af Rina

import  { useState, useEffect } from 'react';
import axios from 'axios'; 

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
    <div className="dagligdag-slider">
      {posts.length > 0 && (
        <div className="slide">
          <div className="slide-content">
            {/* Render post content here */}
            <h2 dangerouslySetInnerHTML={{ __html: posts[currentSlide].title.rendered }} />
            <div dangerouslySetInnerHTML={{ __html: posts[currentSlide].excerpt.rendered }} />
            
            {posts[currentSlide]?._embedded?.['wp:featuredmedia'] && (
              <img
              src={posts[currentSlide]._embedded['wp:featuredmedia'][0].source_url}
              alt={posts[currentSlide].title.rendered}
              />
                )}


            {/* Other post details */}
          </div>
          <div className="arrows">
            <button onClick={prevSlide} className="arrow left-arrow">&#8249;</button>
            <button onClick={nextSlide} className="arrow right-arrow">&#8250;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dagligdag;
