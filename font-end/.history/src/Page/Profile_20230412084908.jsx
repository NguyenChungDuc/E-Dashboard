import React from "react";
import { Helmet } from "react-helmet";
function Profile() {
  return (
    <div className="profile">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className="user"></div>
    </div>
  );
}

export default Profile;
