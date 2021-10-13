import React, { useEffect, useState } from 'react'
import Carousel from '../components/Carousel';
import axios from 'axios';
import icon from '../resource/icon-1.png';
// import Carousel from 'react-elastic-carousel'

const Landing = () => {

    const [news, setNews] = useState(null);

    const getNews = async () => {
        let url = 'https://newsapi.org/v2/everything?q=Apple&from=2021-10-13&sortBy=popularity&apiKey=29761c5850744c669e62fa94d3991d63'
        var response = await axios.get(url);

        if (response?.status === 200 && response?.data && response.data.totalResults > 0) {
            let data = response.data.articles.map(({ title, description, urlToImage }) => ({
                title,
                description,
                img: urlToImage
            })).slice(0, 10)

            setNews(data)
        }
    }

    useEffect(() => {
        getNews()
    }, [])

    return (
        <div>
            <h1 className="subtitle text-center">What is the <br /> <span className="emphasis">Speciality Of Us?</span></h1>
            {
                news && (
                    <Carousel>
                        {
                            news.map((x, i) => (
                                <div key={`item-carousel-${i}`}>
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
                                </div>
                            ))
                        }
                    </Carousel>
                )
            }

        </div>
    );
}

export default Landing;