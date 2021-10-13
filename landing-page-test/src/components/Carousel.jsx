import React from 'react';

const Carousel = ({ data }) => {
    return (
        <div className="carousel">
            <div className="carousel-container">
            {
                data.map(x => (
                    <div className="item">
                        <div className="card card-category">
                            <img
                                className="card-icon img-rounded"
                                src={x.img}
                            />
                            <h3 className="card-title">{x.title}</h3>
                            <p className="card-description">
                                {x.description}
                            </p>
                        </div>
                    </div>
                ))
            }
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