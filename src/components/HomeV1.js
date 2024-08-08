import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


const HomeV1 = () => {
  const dispatch = useDispatch();
  const sharedState = useSelector(state => state.sharedState);

  const updateSharedState = () => {
    dispatch({ type: 'UPDATE_SHARED_STATE', payload: { homeData: 'New Data' } });
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to Our Platform</h1>
        <p>Your one-stop solution for all your needs. Explore the features and enjoy the seamless experience.</p>
        <button className="cta-button" onClick={updateSharedState}>Get Started</button>
      </section>
      
      <section className="features-section">
        <div className="feature-item">
          <h2>Feature One</h2>
          <p>Discover how our first feature can help you achieve your goals effortlessly.</p>
        </div>
        <div className="feature-item">
          <h2>Feature Two</h2>
          <p>Our second feature is designed to provide you with unmatched convenience.</p>
        </div>
        <div className="feature-item">
          <h2>Feature Three</h2>
          <p>Experience the power of our third feature, tailored for your success.</p>
        </div>
      </section>
      
      <div className="component">
        <h1>Home Version 1</h1>
        <button onClick={updateSharedState}>Update Shared State</button>
        <div>Hello world</div>
      </div>
    </div>
  );
};

export default HomeV1;
