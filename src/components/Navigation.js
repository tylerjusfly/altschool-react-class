import React from 'react'
import { NavLink } from "react-router-dom";


export default function () {
  return (
    <div className="navigation">
    <NavLink style={isActive => ({color:isActive? "red" : "black"})} to="/" className="btn"> HomePage </NavLink>
    <NavLink style={isActive => ({color:isActive? "red" : "black"})} to="/about" className="btn"> About  </NavLink>
  </div>
  )
}
