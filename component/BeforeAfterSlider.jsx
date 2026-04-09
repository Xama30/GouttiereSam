import React, { useState, useEffect, useRef } from "react";

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeAlt = "Before image",
  afterAlt = "After image",
  beforeLabel = "Avant",
  afterLabel = "Après",
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef();

  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (!isDragging) return;

      const rect = sliderRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;
      const newPosition = (x / width) * 100;
      setSliderPosition(Math.min(Math.max(newPosition, 0), 100));
    };

    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    const handleGlobalTouchMove = (e) => {
      if (!isDragging) return;

      const rect = sliderRef.current.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const width = rect.width;
      const newPosition = (x / width) * 100;
      setSliderPosition(Math.min(Math.max(newPosition, 0), 100));
    };

    const handleGlobalTouchEnd = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    window.addEventListener("mouseup", handleGlobalMouseUp);
    window.addEventListener("touchmove", handleGlobalTouchMove);
    window.addEventListener("touchend", handleGlobalTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("touchmove", handleGlobalTouchMove);
      window.removeEventListener("touchend", handleGlobalTouchEnd);
    };
  }, [isDragging]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  return (
    <div
      className="before-after-slider"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <span className="slider-badge slider-badge--before">{beforeLabel}</span>
      <span className="slider-badge slider-badge--after">{afterLabel}</span>

      <div className="image-container before-image">
        <img
          src={beforeImage}
          alt={beforeAlt}
          loading="lazy"
          decoding="async"
          draggable="false"
        />
      </div>
      <div
        className="image-container after-image"
        style={{
          clipPath: `inset(0 0 0 ${sliderPosition}%)`,
        }}
      >
        <img
          src={afterImage}
          alt={afterAlt}
          loading="lazy"
          decoding="async"
          draggable="false"
        />
      </div>
      <div
        className="slider-handle"
        style={{
          left: `${sliderPosition}%`,
        }}
      ></div>
    </div>
  );
};

export default BeforeAfterSlider;
