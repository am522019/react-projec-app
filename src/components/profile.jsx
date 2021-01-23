import React from "react";
import PageHeader from "./common/pageHeader";
import Joi from "joi-browser";
import Form from "./common/form";
import userService from "../services/userService";
import { toast } from "react-toastify";

class Profile extends Form {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
    },
    errors: {},
  };
  schema = {
    _id: Joi.string(),
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
    name: Joi.string().required().min(2).label("Name"),
  };

  async componentDidMount() {
    const userId = this.props.match.params.id;
    const { data } = await userService.getUser(userId);
    this.setState({ data: this.mapToViewModel(data) });
  }
  mapToViewModel(user) {
    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
    };
  }
  cancelMethod = () => {
    this.props.history.push("/my-cards");
  };

  doSubmit = async () => {
    const { data } = this.state;
    await userService.EditUserProfile(data);
    toast("your card is updated");
    this.props.history.replace("/my-cards");
  };

  render() {
    return (
      <div className="container">
        <PageHeader titleText=" PROFILE " />
        <div className="row">
          <div className="col-12">
            <p></p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={this.handleSubmit} method="POST" autoComplete="off">
              {this.renderInput("email", "Email", "email")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput("name", "Name")}
              {this.renderButton("EDIT Profile")}
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

export default Profile;
