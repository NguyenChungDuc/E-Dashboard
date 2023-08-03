import React from "react";
import "../Style/Profile.css";
import { Helmet } from "react-helmet";
function Profile() {
  return (
    <div className="profile">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className="user">
        <img src="img.png" alt="" />
        <input type="file" />
      </div>
    </div>
  );
}

export default Profile;
