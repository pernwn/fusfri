// Udviklet af Nor

import React from "react";

// Import af Slider-komponenten fra react-slick-biblioteket
import Slider from "react-slick";

// Import af styles fra slick-carousel-biblioteket
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Definition af Carrousel-funktionen som en funktionel komponent
const Carrousel = ({ images }) => {
  // Konfigurationsindstillinger for Slider-komponenten
  const settings = {
    dots: true, // Vis prikker for at indikere aktuelt billede
    infinite: true, // Tillad uendelig rulning af billederne
    slidesToShow: 1, // Antal billeder vist på én gang
    slidesToScroll: 1, // Antal billeder rullet ved hver gang
    autoplay: true, // Autoplay-funktion aktiveret
    speed: 5000, // Hastighed for automatisk rulning (i millisekunder)
    cssEase: "linear", // Ease-funktion for animationsglidning
  };

  return (
    <div className="carrouselContainer">
      {/* Brug af Slider-komponenten med de givne indstillinger */}
      <Slider {...settings}>
        {/* Mapping gennem billeder og oprettelse af slide for hvert billede */}
        {images.map((image, index) => (
          <div key={index}>
            {/* Visning af billedet med kilde og alternativ tekst */}
            <img src={image} alt={`slide-${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carrousel;
