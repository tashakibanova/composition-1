import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ title, description, buttonText, children }) => {
  return (
    <div className="card mb-3">
      {children ? (
        <div className="row g-0">
          <div className="col-md-4">
            {children}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <button className="btn btn-primary">{buttonText}</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <button className="btn btn-primary">{buttonText}</button>
        </div>
      )}
    </div>
  );
};

export default Card;