import React, { useEffect, useState } from 'react';

const Carousel = ({ children }) => {
    const [show, setShow] = useState([])

    const initCarousel = () => {
        let elements = Array(children.length).fill(0).map((x, i) => i).slice(0, 3)
        setShow(elements)
    }

    useEffect(() => {

        if (!children) return;

        initCarousel()

    }, [children])

    return (
        <div className="carousel">
            <div>
                <div className="carousel-container">
                    {
                        children
                    }
                </div>
            </div>

            <div className="carousel-actions">
                <button className="action">
                    {"<"}
                </button>
                <button className="action">
                    {">"}
                </button>
            </div>
        </div>
    );
}

export default Carousel;