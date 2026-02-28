import React, { useState } from "react";
import '../../styles/HomeCss/whyFloriana.css'

const WhyFloriana = () => {
    const [showImage, setShowImage] = useState(false);
    const [bgImage, setBgImage] = useState("");

    const handleMouseEnterContainer = () => {
        setShowImage(true);
    };

    const handleMouseLeaveContainer = () => {
        setShowImage(false);
    };

    const handleElemEnter = (e) => {
        const img = e.currentTarget.getAttribute("data-img");
        setBgImage(img);
    };

    return (
        <div id="WhyFloriana">
            <p className="para">Study in Malta</p>
            <h1 className="heading">Why Floriana?</h1>

            <div
                id="img-container"
                style={{
                display: showImage ? "block" : "none",
                backgroundImage: `url(${bgImage})`,
                }}
            >
            </div>

            <div
                id="elems-container"
                onMouseEnter={handleMouseEnterContainer}
                onMouseLeave={handleMouseLeaveContainer}
            >
                <div className="elem" data-img="./images/img1.png" onMouseEnter={handleElemEnter}>
                    <div className="overlay"></div>
                    <h2>Because of History</h2>
                    <div id="flex-cont">
                        <h4>CopyLight</h4>
                        <p>fsfsfdfdf</p>
                    </div>
                </div>

                <div className="elem" data-img="./images/img2.png" onMouseEnter={handleElemEnter}>
                    <div className="overlay"></div>
                    <h2>Architecture</h2>
                    <div id="flex-cont">
                        <h4>CopyLight</h4>
                        <p>fsfsfdfdf</p>
                    </div>
                </div>

                <div className="elem" data-img="./images/img3.png" onMouseEnter={handleElemEnter}>
                    <div className="overlay"></div>
                    <h2>Its authenticity</h2>
                    <div id="flex-cont">
                        <h4>CopyLight</h4>
                        <p>fsfsfdfdf</p>
                    </div>
                </div>

                <div className="elem" data-img="./images/img4.png" onMouseEnter={handleElemEnter}>
                    <div className="overlay"></div>
                    <h2>Music festivals</h2>
                    <div id="flex-cont">
                        <h4>CopyLight</h4>
                        <p>fsfsfdfdf</p>
                    </div>
                </div>

                <div className="elem" data-img="./images/img5.png" onMouseEnter={handleElemEnter}>
                    <div className="overlay"></div>
                    <h2>Public gardens</h2>
                    <div id="flex-cont">
                        <h4>CopyLight</h4>
                        <p>fsfsfdfdf</p>
                    </div>
                </div>

                <div className="elem" data-img="./images/img6.png" onMouseEnter={handleElemEnter}>
                    <div className="overlay"></div>
                    <h2>SOHO 2026</h2>
                    <div id="flex-cont">
                        <h4>CopyLight</h4>
                        <p>fsfsfdfdf</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyFloriana;