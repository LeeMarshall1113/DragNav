import React from 'react';
import '../../App.css';
/*
export default function Select() {
  return <h1 className='select'>FUCK</h1>;
}
*/
function Select() {
    return (
        <div id="demo" className="carousel slide" data-ride="carousel">

            {/* Indicators */}
            <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
            </ul>

            {/* Slides */}
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <a href="https://example.com/link-for-slide-1" target="_blank" rel="noopener noreferrer">
                        <img src="https://placekitten.com/640/360" alt="Image 1" width="100%" />
                        <div className="carousel-caption">
                            <h3>Cat 1</h3>
                            <p>First cat is majestic!</p>
                        </div>
                    </a>
                </div>
                <div className="carousel-item">
                    <a href="https://example.com/link-for-slide-2" target="_blank" rel="noopener noreferrer">
                        <img src="https://placekitten.com/641/360" alt="Image 2" width="100%" />
                        <div className="carousel-caption">
                            <h3>Cat 2</h3>
                            <p>Second cat looks great!</p>
                        </div>
                    </a>
                </div>
                <div className="carousel-item">
                    <a href="https://example.com/link-for-slide-3" target="_blank" rel="noopener noreferrer">
                        <img src="https://placekitten.com/642/360" alt="Image 3" width="100%" />
                        <div className="carousel-caption">
                            <h3>Cat 3</h3>
                            <p>Third cat is adorable!</p>
                        </div>
                    </a>
                </div>
            </div>

            {/* Left and right controls */}
            <a className="carousel-control-prev" href="#demo" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#demo" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}
export default Select;