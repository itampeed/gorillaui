import React, { useRef, useEffect, useState } from "react";
import "./CategorySliderWithBanner.css";

// Default categories
const defaultCategories = [
  {
    label: "iphones",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/refurb-iphone-15-black-202412?wid=1144&hei=1144&fmt=jpeg&qlt=90",
    link: "#",
  },
  {
    label: "Samsung",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIm55NprUAHQlN90NrrQdX9ciJJUFnyouSUg&s",
    link: "#",
  },
  {
    label: "Tecno",
    image: "https://phoneshopkenya.co.ke/wp-content/uploads/2025/02/Tecno-Camon-40-Premier-1.webp",
    link: "#",
  },
  {
    label: "Huawei",
    image: "https://m.media-amazon.com/images/I/51zDfRUUhHL._AC_SL1000_.jpg",
    link: "#",
  },
  {
    label: "Infinix",
    image: "https://global.pro.infinixmobility.com/media/catalog/product/x/6/x6857_note50x5g_base1_7_1.png",
    link: "#",
  },
];

// Default banner image and link
const defaultBanner = {
  image: "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?semt=ais_hybrid&w=740",
  link: "#",
};

const CategorySliderWithBanner = ({ bannerUrl, bannerLink, categories }) => {
  const sliderRef = useRef(null);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);

  const itemsToRender =
    Array.isArray(categories) && categories.length > 0
      ? categories
      : defaultCategories;

  const updateArrowVisibility = () => {
    const el = sliderRef.current;

    if (!el) return;

    // Hide/show left arrow
    if (el.scrollLeft <= 5) {
      leftArrowRef.current.style.display = "none";
    } else {
      leftArrowRef.current.style.display = "block";
    }

    // Hide/show right arrow
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 5) {
      rightArrowRef.current.style.display = "none";
    } else {
      rightArrowRef.current.style.display = "block";
    }
  };

  const scrollSlider = (direction) => {
    const scrollAmount = 270 * direction;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

    // Use timeout to wait until scroll finishes
    setTimeout(updateArrowVisibility, 400);
  };

  useEffect(() => {
    updateArrowVisibility();

    // Listen to scroll changes
    const el = sliderRef.current;
    el.addEventListener("scroll", updateArrowVisibility);

    return () => {
      el.removeEventListener("scroll", updateArrowVisibility);
    };
  }, []);

  return (
    <section className="category-banner-section">
      {/* Left Banner */}
      <a
        href={bannerLink || defaultBanner.link}
        className="vertical-banner"
        style={{ backgroundImage: `url(${bannerUrl || defaultBanner.image})` }}
        target="_blank"
        rel="noopener noreferrer"
      />

      {/* Right Slider */}
      <div className="slider-container">
        <button
          className="slider-arrow left"
          ref={leftArrowRef}
          onClick={() => scrollSlider(-1)}
        >
          &#10094;
        </button>
        <button
          className="slider-arrow right"
          ref={rightArrowRef}
          onClick={() => scrollSlider(1)}
        >
          &#10095;
        </button>

        <div className="category-slider" ref={sliderRef}>
          {itemsToRender.map((item, i) => (
            <a key={i} href={item.link} className="category-item">
              <div className="image-wrapper">
                <img src={item.image} alt={item.label} />
              </div>
              <div>{item.label}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySliderWithBanner;
