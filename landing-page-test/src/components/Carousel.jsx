import React, { useEffect, useRef, useState } from 'react';
import CarouselComponent from 'react-elastic-carousel'


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
            itemPadding={[20, 18]}
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
                    {"<"}
                </button>
                <button className="action" onClick={handleNext}>
                    {">"}
                </button>
            </div>
        </div>
    );
}

export default Carousel;