import React from "react";
import CarouselComponent from "./carouselComponent";
import ContentHeader from "./ContentHeader";
import Article from "./Article";

const Content = () => (
  <div id="content">
    <div
      className="content-Left"
    >
      <ContentHeader />
      <CarouselComponent />
    </div>
    <Article />
  </div>
);

export default Content;
