import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-text">
          <h1>
            "Discover Your Perfect Piece: Explore Our Exquisite Collection
            Today!"
          </h1>
          <p>
            Welcome to our luxurious fur boutique, where elegance meets comfort.
            Explore our curated collection of timeless designs tailored to
            elevate your style for all occasions.
          </p>
          <button className="cta-button">Make an Order →</button>
        </div>
        <div className="hero-image">
          <img src="./images/hero.png" alt="Fashion model" />
        </div>
      </section>

      <section className="features-section">
        <div className="feature-list">
          <div className="feature-item">
            <h3>Premium Quality Furs</h3>
            <p>
              Only the finest materials, ensuring a luxurious feel and look.
            </p>
          </div>
          <div className="feature-item">
            <h3>Exclusive Designs</h3>
            <p>Unique, handcrafted styles for every taste and occasion.</p>
          </div>
          <div className="feature-item">
            <h3>Exceptional Service</h3>
            <p>Personalized attention for a seamless shopping experience.</p>
          </div>
        </div>
        <div className="feature-highlight">
          <h2>
            Transform Your Style: Discover Seconds – Your Luxurious Fur Haven
          </h2>
          <p>
            Elevate your style with our exclusive fur collection. Embrace
            elegance today!
          </p>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="testimonial-content">
          <h2>Feedback from Clients</h2>
          <p>
            Our experience was beyond amazing! Outstanding quality, impeccable
            service, and elegant designs. My wardrobe feels transformed. Highly
            recommend this boutique!
          </p>
          <a href="#feedback" className="testimonial-link">
            Read more feedback →
          </a>
        </div>
        <div className="testimonial-image">
          <img src="./images/feedback.jpg" alt="Happy client" />
        </div>
      </section>

      <section className="process-section">
        <h2>The process what you should do</h2>
        <div className="process-steps">
          <div className="step">
            <h3>Browse</h3>
            <p>Explore our collection of exquisite designs.</p>
          </div>
          <div className="step">
            <h3>Select</h3>
            <p>Pick the piece that resonates with you.</p>
          </div>
          <div className="step">
            <h3>Order</h3>
            <p>Place your order with ease.</p>
          </div>
          <div className="step">
            <h3>Deliver</h3>
            <p>Receive your luxurious item at your doorstep.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
