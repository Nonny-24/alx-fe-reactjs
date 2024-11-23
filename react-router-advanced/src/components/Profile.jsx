import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <Link to="details">Profile Details</Link> | <Link to="settings">Profile Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Profile;