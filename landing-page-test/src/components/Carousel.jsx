import React, { useEffect, useRef, useState } from 'react';
import CarouselComponent from 'react-elastic-carousel'
import arrowLeft from '../resource/arrow-left.svg';
import arrowright from '../resource/arrow-right.svg';

const Carousel = ({ children, ...props }) => {
   
    const ref = useRef(null)

    const handleNext =() => ref.current.slideNext()

    const hendlePrev = () => ref.current.slidePrev()
  return (
        <div>
          <CarouselComponent 
          ref={ref}
          className="carousel"
            itemsToShow={3}
            pagination={false}
            itemPadding={[80, 18]}
            breakPoints={[
                { width: 1, itemsToShow: 1 },
                { width: 850, itemsToShow: 2},
                { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
                { width: 1450, itemsToShow: 4 },
                { width: 1750, itemsToShow: 5 },
              ]}
              showArrows={false}
              {...props} >
                    {
                        children
                    }

        </ CarouselComponent>

            <div className="carousel-actions">
                <button className="action" onClick={hendlePrev}>
                    <img src={arrowLeft} />
                </button>
                <button className="action" onClick={handleNext}>
                <img src={arrowright} />

                </button>
            </div>
        </div>
    );
}

export default Carousel;