// ExampleCarouselImage.js
import React from 'react';

function ExampleCarouselImage({ text }) {
  return <img src="https://via.placeholder.com/800x400?text=${text}" alt={text} width="800" height="400" />;
}

export default ExampleCarouselImage;