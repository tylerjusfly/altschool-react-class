import React from "react";
import Avatar from "./Avatar";
import { AuthContext } from "../App";
import "../index.css";
import Navigation from "./Navigation";

//Card component .....
function UserProfile() {
  const userAuth = React.useContext(AuthContext);

  return (
    <div className="Card">
      <Avatar />
      <div className="card-name"> {userAuth.name}</div>
      <div className="card-bio">Obama is the first black president</div>
      <div className="card-bio"> His age is {userAuth.age}</div>
      <Navigation/>
    </div>
  );
}

export default UserProfile;

// style={isActive => ({color: isActive ? "green" : "blue"})}