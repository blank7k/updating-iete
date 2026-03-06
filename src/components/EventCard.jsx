import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ViewMoreContent from "./ViewMoreContent";

const EventCard = ({ event, urlFor }) => {

  const [showMore, setShowMore] = useState(false);

  return (
    <div className="event-box">

      <h3 className="event-title">{event.title}</h3>
      <p className="event-date">{event.date}</p>

      <Carousel>
        {event.images.map((img, index) => (
          <Carousel.Item key={index}>
            <img
              src={img.asset ? urlFor(img.asset) : img}
              alt={event.title}
              className="event-img"
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <button
        className="view-more-btn"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "View Less" : "View More"}
      </button>

      {showMore && <ViewMoreContent title={event.title} />}

    </div>
  );
};

export default EventCard;