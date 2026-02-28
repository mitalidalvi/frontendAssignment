import React from 'react'
import '../../styles/AboutCss/main1.css'

const Main1 = () => {
    return (
        <section className="aboutSection">
            <div className="aboutContainer">
                
                {/* Left Content */}
                <div className="aboutLeft">
                    <h1>
                        Shaping <span>Future Leaders</span> Through Education
                    </h1>

                    <p>
                        We empower students with practical knowledge, modern skills, and 
                        industry-driven learning experiences designed to unlock their full potential.
                    </p>

                    <div className="aboutButtons">
                        <button className="primaryBtn">Explore Programs</button>
                        <button className="outlineBtn">Learn More</button>
                    </div>
                </div>

                {/* Right Cards */}
                <div className="aboutRight">
                    <div className="infoCard">
                        <h3>10K+</h3>
                        <p>Students Enrolled</p>
                    </div>

                    <div className="infoCard">
                        <h3>120+</h3>
                        <p>Expert Mentors</p>
                    </div>

                    <div className="infoCard">
                        <h3>95%</h3>
                        <p>Success Rate</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main1