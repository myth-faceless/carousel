import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "./Card";
import images from "./Images";
import "./styles.css";

export default function App() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

  return (
    <div className="App">
      <Carousel breakPoints={breakPoints}>
        <Card img={images[0].imgURL} />
        <Card img={images[1].imgURL} />
        <Card img={images[2].imgURL} />
        <Card img={images[3].imgURL} />
        <Card img={images[4].imgURL} />
        <Card img={images[5].imgURL} />
      </Carousel>
    </div>
  );
}
