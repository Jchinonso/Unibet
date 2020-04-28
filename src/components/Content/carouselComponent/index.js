import React from "react";

import { Carousel, Button, Image } from "react-bootstrap";
import useApiCall from "../../../hooks/useApiCall";
import { getSportIcon, getTimeStamp } from "../../../utils";

const CarouselComponent = () => {
  const [data] = useApiCall();
  return (
    <Carousel controls={false} interval={3000} id="carousel" indicators={false}>
      {data &&
        data.map(item => (
          <Carousel.Item key={item.event.id}>
            <Carousel.Caption className="carousel-caption">
              <div>
                <span data-testid="name" className="score-span">
                  {`${item.liveData.score.home} - ${item.liveData.score.away}`}
                </span>
              </div>
              <div className="sport-name-container">
                <span className="sport-icon">
                  <Image
                    alt={item.event.sport}
                    src={getSportIcon(item.event.sport)}
                  />
                </span>
                <span className="sport-name">{item.event.name}</span>
              </div>
              <div className="sport-timestamp" data-testid={item.event.start}>
                {getTimeStamp(item.event.start)}
              </div>
              <Button
                data-testid="btn"
                href={`https://www.unibet.com/betting#/event/live/${item.event.id}`}
                style={{ backgroundColor: "#009933" }}
              >
                Place a bet
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default CarouselComponent;
