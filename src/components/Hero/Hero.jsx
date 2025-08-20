import React from 'react'
import './hero.css'
import Arrow from '../../assets/hero-arrow.png'
import Explore from '../../assets/explore.png'
import Guide from '../../assets/guide.png'
import Puzzle from '../../assets/puzzle.png'
import CircleOrange from '../../assets/circle-orange.png'
import CircleBlue from '../../assets/circle-blue.png'
import Swiggle from '../../assets/swiggle.png'
import { FaCirclePlay } from "react-icons/fa6";

function Hero() {
    return (
        <div className="main-container hero-container">
            <section className='hero-section'>
                <div className='hero-text'>
                    <div className="heading-arrow-wrapper">
                        <h1 class="heading">
                            We make it the way<br />
                            <span class="nowrap">your <span class="highlight">child</span> loves it</span>
                        </h1>
                        <img className='hero-arrow' src={Arrow} alt="illustration of arrow" />
                    </div>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis </p>
                    <button><FaCirclePlay /> <p>Discover now</p></button>
                </div>

                <div className="hero-grid">
                    <div className="guide-wrapper">
                        <img className='illustration-border' src={CircleOrange} alt="illustration of a circle" />
                        <div className='guide'>
                            <img src={Guide} alt="illustration of a guide" />
                            <h3>Guidance</h3>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                        </div>
                        <img className='illustration-border' src={Swiggle} alt="illustration of a swiggle" />
                    </div>

                    <div className="explore-decision-wrapper">
                        <div className='explore'>
                            <img src={Explore} alt="illustration of exploration" />
                            <h3>Exploring skills</h3>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                        </div>

                        <div className="decision-wrapper">
                            <div className='decision'>
                                <img src={Puzzle} alt="illustration of a puzzle" />
                                <h3>Decision making</h3>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                            </div>
                            <img className='illustration-border' src={CircleBlue} alt="illustration of a blue circle" />
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Hero