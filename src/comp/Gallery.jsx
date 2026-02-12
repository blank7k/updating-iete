import { useState, useEffect } from "react";
import sanityClient from "../sanity/sanityconfig";
import imageUrlBuilder from "@sanity/image-url";
import Carousel from 'react-bootstrap/Carousel';
import { motion } from "framer-motion"; // Import framer-motion
import "./Gallery.css";

// Set up the image URL builder
const builder = imageUrlBuilder(sanityClient);

// Function to get the image URL
const urlFor = (source) => builder.image(source).url();

const Gallery = () => {
  const [sliderImages, setSliderImages] = useState([]);
  const [events, setEvents] = useState([]);

  const placeholderImg = "https://i.ibb.co/JRHnS7Kp/placeholder.jpg";
  const manualImages = Array(5).fill(placeholderImg);

  const manualEvents = [
    {
      title: "Research Paper Writing Seminar",
      date: "2025-26",
      images: [
        "https://i.postimg.cc/MzMWhdDG/IMG-6797.avif",
        "https://i.postimg.cc/CMTPxLTg/IMG-6795.avif"
      ],
      redirectUrl: ""
    },
    {
      title: "Mosaic 2k25",
      date: "2025-26",
      images: [
        "https://i.postimg.cc/HdmvGx9k/PXL-20251017-045139692-MP-jpg.jpg",
        "https://i.postimg.cc/0xDXHmDR/IMG-20251017-122836-jpg.jpg",
        "https://i.postimg.cc/37mfbppC/IMG-20251017-122750-jpg.jpg",
        "https://i.postimg.cc/NtWP4by1/IMG-20251017-122237-jpg.jpg",
        "https://i.postimg.cc/xQWFRgkm/IMG-7103.avif",
        "https://i.postimg.cc/59S39BSx/IMG_7183.avif"
      ],
      redirectUrl: ""
    },
    {
      title: "MimoVerse",
      date: "2025-26",
      images: [
        "https://i.postimg.cc/mTfm3rts/Screenshot-(133).png",
        "https://i.postimg.cc/6BJMVQyt/Screenshot-(134).png",
        "https://i.postimg.cc/ZJtwPqCR/Screenshot-(136).png",
        "https://i.postimg.cc/x9D6Gdc0/Screenshot-(143).png",
        "https://i.postimg.cc/5fBnsMC6/Screenshot-(147).png",
        "https://i.postimg.cc/zqC0x1gS/Screenshot-(152).png"
      ],
      redirectUrl: ""
    },
    {
      title: "IOT/IIOT",
      date: "2025-26",
      images: [
        "https://i.postimg.cc/442rNR5z/IMG_20251001_WA0078_jpg.jpg",
        "https://i.postimg.cc/2ytJHn68/IMG_6171_(1).avif",
        "https://i.postimg.cc/hvv6b2SK/IMG_6219.avif",
        "https://i.postimg.cc/PrL0CV3L/IMG_20251001_WA0119_jpg.jpg"
      ],
      redirectUrl: ""
    },
    {
      title: "IETE Farewell 25-26",
      date: "2025-26",
      images: [
        "https://i.postimg.cc/gctfkbDc/IMG_20250806_WA0094_jpg.jpg",
        "https://i.postimg.cc/mDBtDHTj/IMG_6081_JPG.jpg",
        "https://i.postimg.cc/VktyVZXL/IMG_6082_JPG.jpg",
        "https://i.postimg.cc/t460MvFb/IMG_6085_JPG.jpg",
        "https://i.postimg.cc/fRd4rqYw/IMG_6086_JPG.jpg",
        "https://i.postimg.cc/Cx8yQrbM/IMG_6088_JPG.jpg",
        "https://i.postimg.cc/yNhMVJQx/IMG_6089_JPG.jpg",
        "https://i.postimg.cc/DZ2tm2Hm/IMG_6205_JPG.jpg"
      ],
      redirectUrl: ""
    },
    {
      title: "IETE Freshers 25-26",
      date: "2025-26",
      images: [
        "https://i.postimg.cc/zvPB02Kb/IMG_6219_JPG.jpg",
        "https://i.postimg.cc/fygLBqmX/IMG_6223_JPG.jpg",
        "https://i.postimg.cc/MHrTd3V1/IMG_6241_JPG.jpg",
        "https://i.postimg.cc/T1HwCNgb/IMG_6245_JPG.jpg",
        "https://i.postimg.cc/pVcgXMZ5/IMG_20250806_WA0342_jpg.jpg",
        "https://i.postimg.cc/xjscf8hT/IMG_6309_JPG.jpg"
      ],
      redirectUrl: ""
    }
  ];

  // Fetch event slider images
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "eventslider"][0]{
          images[]{asset->{_id, url}}
        }`
      )
      .then((data) => {
        const fetchedImages = data?.images?.map((img) => urlFor(img.asset)) || [];
        setSliderImages(fetchedImages);
      })
      .catch(console.error);
  }, []);

  // Fetch event gallery details
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "event"]{
          title,
          date,
          images[]{asset->{_id, url}},
          redirectUrl
        }`
      )
      .then((data) => setEvents([...manualEvents, ...data]))
      .catch(console.error);
  }, []);

  return (
    <div className="gallery-container">
      <motion.h2
        className="gallery-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        Gallery
      </motion.h2>

      {/* Main Slider using Bootstrap Carousel */}
      <div className="slider-container">
        {sliderImages.length > 0 ? (
          <Carousel>
            {sliderImages.map((img, index) => (
              <Carousel.Item key={index}>
                <motion.img
                  src={img}
                  alt={`Slide ${index}`}
                  className="d-block w-100 slider-img"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1 }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <p>Loading images...</p>
        )}
      </div>

      {/* Event Gallery */}
      <motion.div
        className="event-gallery"
        id="event-gallery"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        {events.length > 0 ? (
          events.map((event, index) => (
            <motion.div
              key={index}
              className="event-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, delay: index * 0.2 }} // Staggered animation
            >
              <h3 className="event-title">{event.title}</h3>
              <p className="event-date">{event.date}</p>

              {/* Event Image Carousel */}
              {event.images.length > 0 ? (
                <Carousel>
                  {event.images.map((img, imgIndex) => (
                    <Carousel.Item key={imgIndex}>
                      <motion.img
                        src={img.asset ? urlFor(img.asset) : img}
                        alt={event.title}
                        className="d-block w-100 event-img"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              ) : (
                <p>No images available</p>
              )}

              {/* Event Redirect URL */}
              {event.redirectUrl && (
                <a
                  href={event.redirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="event-link"
                >
                  View More ➜
                </a>
              )}
            </motion.div>
          ))
        ) : (
          <p>Loading events...</p>
        )}
      </motion.div>
    </div>
  );
};

export default Gallery;
