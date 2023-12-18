//lavet af Rina

import { useState, useEffect } from 'react';
import axios from 'axios'; 
import { Card, Stack, Typography, IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const Dagligdag = () => {
  // Definerer to state variabler: 'posts' til opbevaring af indlæg og 'currentSlide' til at holde styr på det aktuelle slide.
  const [posts, setPosts] = useState([]); // Initialiserer 'posts' som en tom array.
  const [currentSlide, setCurrentSlide] = useState(0); // Initialiserer 'currentSlide' til værdien 0.

  useEffect(() => {
    // useEffect kaldes, når komponenten indlæses første gang.
    // Funktionen henter indlæg fra WordPress API'en og opdaterer 'posts' med de hentede data.

    const fetchPosts = async () => {
      try {
        // Anmoder om indlæg fra WordPress API'en med specifikke kategorier og indlejret indhold.
        const response = await axios.get('https://www.wordpress.vicw.dk/wp-json/wp/v2/posts?categories=22&_embed');

        // Opdaterer 'posts' med dataene fra API-svaret.
        setPosts(response.data);
      } catch (error) {
        // Hvis der opstår en fejl under anmodningen, udskrives fejlen til konsollen.
        console.error('Error fetching posts:', error);
      }
    };    

    fetchPosts(); // Kalder funktionen fetchPosts for at hente indlæg, når komponenten indlæses.
  }, []); // Tom array som andet argument sikrer, at useEffect kun kører ved monteering og ikke igen ved opdateringer.


  // Funktionen nextSlide håndterer logikken til at skifte til næste slide.
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (
      prevSlide === posts.length - 1 ? 0 : prevSlide + 1 // Tjekker om det nuværende slide er det sidste. Hvis det er tilfældet, skiftes til det første slide, ellers skiftes til næste slide.
    ));
  };

  // Funktionen prevSlide håndterer logikken til at skifte til forrige slide.
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (
      prevSlide === 0 ? posts.length - 1 : prevSlide - 1 // Tjekker om det nuværende slide er det første. Hvis det er tilfældet, skiftes til det sidste slide, ellers skiftes til forrige slide.
    ));
  };

  

  return (
    <Stack className="dagligdag-slider">
        {/* Tjekker om der er indlæg tilgængelige, før de render */}
      {posts.length > 0 && (
        <Card className="slide">
           {/* En container til pile til at navigere mellem slides */}
                    <div className="arrows">
            <IconButton onClick={prevSlide} className="arrow left-arrow">
                {/* Pileknappen til at gå til det forrige slide */}
              <NavigateBeforeIcon 
              sx={{
                position: 'static',
                justifyContent: 'flex-start',
              }}
              />
            </IconButton> 
            </div>
            <div className="content">   {/* Viser titlen på det aktuelle slide */}
            {/* Viser uddraget af det aktuelle slide */}
            <Typography variant="h4" dangerouslySetInnerHTML={{ __html: posts[currentSlide].title.rendered }} />
            <Typography variant="body1" dangerouslySetInnerHTML={{ __html: posts[currentSlide].excerpt.rendered }} />
            
            {/* Tjekker om det aktuelle slide har en 'featured media' (fremhævet medie) */}
            {posts[currentSlide]?._embedded?.['wp:featuredmedia'] && (
              <img
                src={posts[currentSlide]._embedded['wp:featuredmedia'][0].source_url} // Viser kildestien til billedet
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
