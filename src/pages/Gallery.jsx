import React, { useState, useEffect } from "react";
import "./Gallery.css";
import AOS from "aos";
import "aos/dist/aos.css";
import gallery1 from "../assets/gallery1.jpg";
import galleryvideo1 from "../assets/galleryvideo1.mp4";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import galleryvideo2 from "../assets/galleryvideo2.mp4";
import gallery4 from "../assets/gallery4.jpg";
import galleryvideo3 from "../assets/galleryvideo3.mp4";
import gallery5 from "../assets/gallery5.jpg";
import galleryvideo4 from "../assets/galleryvideo4.mp4";
import galleryvideoscreenshot1 from "../assets/galleryvideoscreenshot1.png";
import galleryvideoscreenshot2 from "../assets/galleryvideoscreenshot2.png";
import galleryvideoscreenshot3 from "../assets/galleryvideoscreenshot3.png";
import galleryvideoscreenshot4 from "../assets/galleryvideoscreenshot4.png";


const mediaData = [
  {
    id: 1,
    type: "photo",
    src: gallery1,
    // title: "High-Depth Drilling",
    // desc: "Industrial borewell execution at GIDC."
  },
  {
    id: 2,
    type: "video",
    thumbnail: galleryvideoscreenshot1,
    videoSrc: galleryvideo1, 
    // title: "Live Drilling Process",
    // desc: "Watch our advanced rig in action."
  },
  {
    id: 3,
    type: "photo",
    src: gallery2,
    // title: "Pump Installation",
    // desc: "Installing heavy-duty submersible pumps."
  },
  {
    id: 4,
    type: "photo",
    src: gallery3,
    // title: "Water Recharge",
    // desc: "Rainwater harvesting system setup."
  },
  {
    id: 5,
    type: "video",
    thumbnail: galleryvideoscreenshot2,
    videoSrc: galleryvideo2,
    // title: "Machinery Setup",
    // desc: "Deploying our compressor unit."
  },
  {
    id: 6,
    type: "photo",
    src: gallery4,
    // title: "Soil Testing",
    // desc: "Analyzing ground layers for best water yield."
  },
  {
    id: 7,
    type: "video",
    thumbnail: galleryvideoscreenshot3,
    videoSrc: galleryvideo3,
    // title: "Machinery Setup",
    // desc: "Deploying our compressor unit."
  },
  {
    id: 8,
    type: "photo",
    src: gallery5,
    // title: "Soil Testing",
    // desc: "Analyzing ground layers for best water yield."
  },
  {
    id: 9,
    type: "video",
    thumbnail: galleryvideoscreenshot4,
    videoSrc: galleryvideo4,
    // title: "Machinery Setup",
    // desc: "Deploying our compressor unit."
  },

];

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [activeLightbox, setActiveLightbox] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Filter logic
  const filteredItems = mediaData.filter((item) => 
    filter === "all" ? true : item.type === filter
  );

  // Open Lightbox
  const openLightbox = (item) => {
    setActiveLightbox(item);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  // Close Lightbox
  const closeLightbox = () => {
    setActiveLightbox(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="gallery-page">
      
      {/* Header Section */}
      <div className="gallery-header" data-aos="fade-down">
        <h4>Our Portfolio</h4>
        <h1>Work In <span>Action</span></h1>
        <p>Explore our latest drilling projects, machinery, and successful water solutions.</p>
      </div>

      {/* Filter Buttons */}
      <div className="gallery-filters" data-aos="fade-up">
        <button 
          className={`filter-btn ${filter === "all" ? "active" : ""}`} 
          onClick={() => setFilter("all")}
        >
          All Work
        </button>
        <button 
          className={`filter-btn ${filter === "photo" ? "active" : ""}`} 
          onClick={() => setFilter("photo")}
        >
          Photos
        </button>
        <button 
          className={`filter-btn ${filter === "video" ? "active" : ""}`} 
          onClick={() => setFilter("video")}
        >
          Videos
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="gallery-item" 
            data-aos="zoom-in" 
            onClick={() => openLightbox(item)}
          >
            <div className="media-wrapper">
              <img 
                src={item.type === 'video' ? item.thumbnail : item.src} 
                alt={item.title} 
              />
              {/* Overlay Icon */}
              <div className="media-overlay">
                <div className="icon-box">
                  {item.type === 'video' ? '▶' : '⊕'}
                </div>
              </div>
              {item.type === 'video' && <div className="video-badge">VIDEO</div>}
            </div>
            <div className="item-info">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeLightbox}>&times;</button>
            
            {activeLightbox.type === 'video' ? (
              <video controls autoPlay className="lightbox-media">
                <source src={activeLightbox.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={activeLightbox.src} alt={activeLightbox.title} className="lightbox-media" />
            )}
            
            <div className="lightbox-caption">
              <h3>{activeLightbox.title}</h3>
              <p>{activeLightbox.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;