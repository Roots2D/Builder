import React, { Component } from 'react';
import './GroupContainer.scss';
import { Link } from 'react-router-dom';

class LandingContainer extends Component {
  render() {
    const { id, title, description } = this.props;
    return (
      <div className="container">
        <h2> { title } </h2>
        <p> { description } </p>
        <Link to={`/versions/${id}/`}>
          <div className="btn btn-primary">
            Modify
          </div>
        </Link>
      </div>
    )
  }
}

export default LandingContainer;
