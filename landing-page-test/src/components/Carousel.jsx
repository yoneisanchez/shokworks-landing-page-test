import React, { useRef, useState } from 'react';
import CarouselComponent from 'react-elastic-carousel'
import arrowLeft from '../resource/arrow-left.svg';
import arrowright from '../resource/arrow-right.svg';

const Carousel = ({ children, ...props }) => {
    const [disabledNext, setDisabledNext] = useState(false)
    const [disabledPrev, setDisabledPrev] = useState(true)
    const ref = useRef(null)

    const handleNext = () => ref.current.slideNext()

    const hendlePrev = () => ref.current.slidePrev()

    const onNextEnd = (currentItem, pageIndex) => {
        let pages = ref.current.state.pages.length - 1;
        setDisabledNext(pages === pageIndex)
        setDisabledPrev(false)
    }

    const onPrevEnd = (currentItem, pageIndex) => {
        setDisabledPrev(pageIndex === 0)
        setDisabledNext(false)
    }

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
                    { width: 900, itemsToShow: 2 },
                    { width: 1300, itemsToShow: 3, itemsToScroll: 2 },
                    { width: 1750, itemsToShow: 4 },
                ]}
                showArrows={false}
                onNextEnd={onNextEnd}
                onPrevEnd={onPrevEnd}
                {...props} >
                {
                    children
                }

            </ CarouselComponent>

            <div className="carousel-actions">
                <button
                    className="action"
                    onClick={hendlePrev}
                    disabled={disabledPrev}
                >
                    <img src={arrowLeft} />
                </button>
                <button
                    className="action"
                    onClick={handleNext}
                    disabled={disabledNext}
                >
                    <img src={arrowright} />
                </button>
            </div>
        </div>
    );
}

export default Carousel;