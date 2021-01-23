import React from "react";
import Form from "./common/form";
import cardService from "../services/cardService";
import PageHeader from "./common/pageHeader";
import { toast } from "react-toastify";

class DeletCard extends Form {
  state = {};
  cancelMethod = () => {
    this.props.history.push("/my-cards");
  };
  schema = {};

  doSubmit = async () => {
    const cardId = this.props.match.params.id;
    await cardService.deleteCard(cardId);
    toast("Card is deleted successfully");
    this.props.history.replace("/my-cards");
  };

  render() {
    return (
      <div className="container">
        <PageHeader titleText="ARE YOU WANT TO DELETE THIS CARD" />
        <div className="row">
          <div className="col-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
              {this.renderButton("DELETE Card", "danger")}
              <button
                className="btn btn-secondary ml-2"
                onClick={this.cancelMethod}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default DeletCard;
