import React from 'react'
import '../styles/cards.css'


const Cards = () => {

    const cardsData = [
        { title: "MBA DEGREES", rotate: -15,  img: "/images/degree.jpg" },
        { title: "DBA DEGREES", rotate: 5,  img: "/images/degree.jpg" },
        { title: "MBA DEGREES", rotate: 25,  img: "/images/degree.jpg" },
        { title: "DBA DEGREES", rotate: -15,  img: "/images/degree.jpg" },
        { title: "MBA DEGREES", rotate: 5,  img: "/images/degree.jpg" },
        { title: "DBA DEGREES", rotate: 25,  img: "/images/degree.jpg" },
    ];

    return (
        <div className="cardsContainer">
            <div id="cardsWeb">
                <div className="container">
                    {cardsData.map((card, index) => (
                        <div
                            key={index}
                            className="glass"
                            data-text={card.title}
                            style={{ "--r": card.rotate }}
                        >
                            <img
                                src={card.img}
                                alt="degree"
                                width={50}
                                height={50}
                                className="courseImg"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div id='cardsMob'>
                <div className='container'>
                    {cardsData.slice(0, 4).map((card, index) => (
                        <div
                            key={index}
                            className="glass"
                            data-text={card.title}
                        >
                            <img
                                src={card.img}
                                alt="degree"
                                width={50}
                                height={50}
                                className="courseImg"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cards