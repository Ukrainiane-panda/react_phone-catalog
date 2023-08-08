import { useEffect, useState } from 'react';

import './Slider.scss';

import photo1 from './photo_1.jpg';
import photo2 from './photo_2.jpg';
import photo3 from './photo_3.jpg';
import photo4 from './photo_4.jpg';

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
];

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMoveLeft = () => {
    setActiveIndex(
      prevIndex => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1),
    );
  };

  const handleMoveRight = () => {
    setActiveIndex(
      prevIndex => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1),
    );
  };

  const handleButtonDownClick = (index: number): void => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleMoveRight();
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="container">
      <div className="slider">
        <button
          type="button"
          aria-label="button"
          className="slider__button move-left"
          onClick={handleMoveLeft}
        />
        <ul className="slider__photo">
          {photos.map((photo, index) => (
            <li
              key={photo}
              className={`slider__item ${index === activeIndex ? 'active' : ''}`}
            >
              <img
                src={photo}
                alt={`Slide ${index + 1}`}
                className="slider__image"
              />
            </li>

          ))}
        </ul>
        <button
          type="button"
          aria-label="button"
          className="slider__button move-right"
          onClick={handleMoveRight}
        />
      </div>
      <div className="slider slider__buttons">
        <button
          type="button"
          aria-label="button"
          className={`slider__button-down ${activeIndex === 0 ? 'is-active' : ''}`}
          onClick={() => handleButtonDownClick(0)}
        />
        <button
          type="button"
          aria-label="button"
          className={`slider__button-down ${activeIndex === 1 ? 'is-active' : ''}`}
          onClick={() => handleButtonDownClick(1)}
        />
        <button
          type="button"
          aria-label="button"
          className={`slider__button-down ${activeIndex === 2 ? 'is-active' : ''}`}
          onClick={() => handleButtonDownClick(2)}
        />
        <button
          type="button"
          aria-label="button"
          className={`slider__button-down ${activeIndex === 3 ? 'is-active' : ''}`}
          onClick={() => handleButtonDownClick(3)}
        />
      </div>
    </div>
  );
};
