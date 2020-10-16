  
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand color__white">ExcerTracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link color__white">Exercises</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link color__white">Create Exercise Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link color__white">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}