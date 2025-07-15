import React from 'react';
import { Link } from 'react-router-dom';
import img4 from './image/ma1.mp4';
import img5 from './image/ip.mp4';
import img6 from './image/w1.mp4';
import img7 from './image/sa1.webm';
import image from './image/iphone15.jpg';
import image1 from './image/Xiaomi12T5G.png';
import image2 from './image/SAMSUNGGalaxyS24Ultra.png';
import image3 from './image/SamsungGalaxyA355G.png';
import image4 from './image/SamsungGalaxyA51.png';
import lap1 from './image/lap.png';
import imag3 from './image/air1.png';
import imag4 from './image/wat1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="container text-center py-5">
        <div className="jumbotron bg-gradient text-white rounded shadow-lg">
          <h1 className="display-4">Welcome to Pixellia!</h1>
          <p className="lead">Shop the latest Products at affordable prices.</p>
        </div>
      </div>

      {/* Video Carousel */}
      <div className="container my-5">
        <div
          id="carousel2"
          className="carousel slide shadow-lg rounded-3"
          data-bs-ride="carousel"
          data-bs-interval="4000"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carousel2"
              data-bs-slide-to="0"
              className="active"
              aria-label="Slide 1"
            ></button>
            <button type="button" data-bs-target="#carousel2" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carousel2" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carousel2" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div className="carousel-inner">
            {[{ src: img4, alt: 'Video 1' }, { src: img5, alt: 'Video 2' }, { src: img6, alt: 'Video 3' }, { src: img7, alt: 'Video 4' }].map((video, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <video src={video.src} className="d-block w-100" alt={video.alt} autoPlay muted loop style={{ height: '500px', objectFit: 'cover', transition: 'all 0.3s ease-in-out' }} />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Best Deals Section */}
      <div className="container my-5">
        <h3 className="text-center text-dark mb-4">Best Deals On Mobiles!</h3>
        <div className="row g-4">
          {[image, image1, image2, image3, image4].map((img, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              <Link to="/Iphone" className="text-decoration-none">
                <div className="card border-0 shadow-lg rounded-lg hover-shadow">
                  <img
                    src={img}
                    className="card-img-top"
                    alt="Product"
                    style={{ height: '200px', objectFit: 'contain', transition: 'transform 0.3s ease-in-out', margin: '10px' }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Product {index + 1}</h5>
                    <p className="text-primary">
                      From ₹44,990 <del className="text-muted" style={{ fontSize: '12px' }}>₹80,000</del>
                    </p>
                    <span className="badge bg-success">45% Off</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Categories */}
      <div className="container my-5">
        <h3 className="text-center text-dark mb-4">Best Deals!</h3>
        <div className="row g-4">
          {[{ img: image1, title: 'Smartphones', price: 'From ₹10,000' },
            { img: lap1, title: 'Laptops', price: 'From ₹20,000' },
            { img: imag3, title: 'AirPods', price: 'From ₹2,000' },
            { img: imag4, title: 'Smartwatches', price: 'From ₹1,700' }
          ].map((category, index) => (
            <div key={index} className="col-6 col-md-3">
              <Link to={`/${category.title}`} className="text-decoration-none">
                <div className="card border-0 shadow-lg text-center hover-shadow">
                  <img src={category.img} alt={category.title} style={{ height: '180px', objectFit: 'contain', margin: '10px' }} className="card-img-top rounded" />
                  <div className="card-body">
                    <h5 className="card-title">{category.title}</h5>
                    <p className="text-primary">{category.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            {['Company', 'Help', 'Online Shop', 'Social Media'].map((section, index) => (
              <div key={index} className="col-6 col-md-3 mb-4">
                <h4 className="text-white">{section}</h4>
                {index !== 3 ? (
                  <ul className="list-unstyled">
                    {['About us', 'Contact us', 'Privacy Policy'].map((item, idx) => (
                      <li key={idx}>
                        <Link to="#" className="text-white text-decoration-none">{item}</Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div>
                    <Link to="#" className="text-white mx-2">
                      <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </Link>
                    <Link to="#" className="text-white mx-2">
                      <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </Link>
                    <Link to="#" className="text-white mx-2">
                      <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </Link>
                    <Link to="#" className="text-white mx-2">
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
