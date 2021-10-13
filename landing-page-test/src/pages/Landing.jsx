import React, { useEffect, useState } from 'react'
import Carousel from '../components/Carousel';
import axios from 'axios';
import icon from '../resource/icon-1.png';
// import Carousel from 'react-elastic-carousel'

const Landing = () => {

    const [news, setNews] = useState([
        {
            img:icon,
            title:'Great Communication',
            description:'We maintain 24/7 communication to cover all your need for the project'
        },
        {
            img:icon,
            title:'Great Communication',
            description:'We maintain 24/7 communication to cover all your need for the project'
        },
        {
            img:icon,
            title:'Great Communication',
            description:'We maintain 24/7 communication to cover all your need for the project'
        },
        {
            img:icon,
            title:'Great Communication',
            description:'We maintain 24/7 communication to cover all your need for the project'
        },
        {
            img:icon,
            title:'Great Communication',
            description:'We maintain 24/7 communication to cover all your need for the project'
        },
    ]);

    const getNews = async () => {
        let url = ''
        var response = await axios.post(url, {
            apiKey: ''
           });
        console.log({response})
    }

    useEffect(() => {
        getNews()
    },[])

    return ( 
        <div>
            <h1 className="subtitle text-center" style={{paddingBottom:81}}>What is the <br /> <span className="emphasis">Speciality Of Us?</span></h1>
            <Carousel>
                {
                    news.map((x,i) => (
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
        </div>
     );
}
 
export default Landing;