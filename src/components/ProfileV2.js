import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


const ProfileV2 = () => {
  const dispatch = useDispatch();
  const sharedState = useSelector(state => state.sharedState);

  const updateProfile = () => {
    dispatch({ type: 'UPDATE_SHARED_STATE', payload: { profileData: 'Updated Profile Data' } });
  };

  return (
    <div className="profile-container">
      <section className="profile-header">
        <h1 className="profile-name">Favourline</h1>
        <p className="profile-email">favourline@gmail.com</p>
        <button className="edit-profile-button" onClick={updateProfile}>Edit Profile</button>
      </section>
      
      <section className="profile-stats">
        <div className="stat-item">
          <h2>Posts</h2>
          <p>120</p>
        </div>
        <div className="stat-item">
          <h2>Followers</h2>
          <p>350</p>
        </div>
        <div className="stat-item">
          <h2>Following</h2>
          <p>180</p>
        </div>
      </section>
      
      <section className="profile-about">
        <h2>About Me</h2>
        <p>
          Hi, I'm Favourline, a passionate software engineer with years of experience in building robust and scalable applications. My journey in tech began with a love for problem-solving and creating efficient solutions, which led me to specialize in front-end development.
        </p>
        <p>
          Throughout my career, I've had the privilege of working on a diverse range of projects, from developing user-friendly interfaces to integrating complex backend systems. My expertise lies in React, Redux, and Next.js, and I’m always eager to embrace new technologies and methodologies to enhance my skill set.
        </p>
        <p>
          When I'm not coding, I enjoy sharing my knowledge with the community through blog posts and speaking engagements. I'm also a dedicated advocate for clean code practices and continuous learning.
        </p>
        <p>
          Outside of work, I’m an avid traveler and photographer. Exploring new places and capturing moments helps me stay inspired and creative. If you'd like to connect or collaborate, feel free to reach out!
        </p>
      </section>
    </div>
  );
};

export default ProfileV2;
