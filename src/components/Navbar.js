import React from "react";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-item-left">
        <h2>Seaside Resort</h2>
        <h4>Home</h4>
      </div>
      <div className="nav-item-right">
        <ul>
          <li>Sign up</li>
          <li>Log in</li>
        </ul>
      </div>
    </nav>
  );
}
