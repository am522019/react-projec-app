import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  state = {};

  render() {
    const { card } = this.props;
    const { user } = this.props;
    console.log(user);
    return (
      <div className="col-md-6 col-lg-4 mt-3">
        <div className="card">
          <img
            width="100"
            className="p-2"
            src={card.bizImage}
            alt={card.bizName}
          />
          <div className="card-body">
            <h5 className="card-title">{card.bizName}</h5>
            <p className="card-text">{card.bizDescription}</p>
            <p className="card-text border-top p-2">
              <b>Tel:</b>
              {card.bizPhone}
              <br />
              {card.bizAddress}
            </p>
            <Link title="Edit" to={`/my-cards/edit/${card._id}`}>
              <i className="far fa-edit fa-lg"></i>{" "}
            </Link>
            |
            <Link title="Delete" to={`/my-cards/delete/${card._id}`}>
              <i className="fas fa-trash fa-lg"></i>
            </Link>
            |
            <Link title="Save" to={`/my-cards/favorites/${card._id}`}>
              <i className="far fa-bookmark fa-lg"></i>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
