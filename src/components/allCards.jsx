import React, { Component } from "react";
import PageHeader from "./common/pageHeader";
import cardService from "../services/cardService";
import Card from "./card";
import http from "../services/httpService";
import userService from "../services/userService";

//import { Link } from "react-router-dom";

class AllCards extends Component {
  state = {
    search: "",
    cards: [],
    user: "",
  };

  async componentDidMount() {
    const { data } = await cardService.getAllCards();
    const user = userService.getCurrentUser();
    this.setState({ user });
    if (data.length > 0) this.setState({ cards: data });
  }

  handleFav = async () => {
    const { data } = await http.post("localhost:3900api\favorites", {
      user_id: "amar1",
      card_id: "amar2",
    });
    console.log(data);
  };

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 40) });
  }

  render() {
    const { cards } = this.state;

    let filteredCards = cards.filter((card) => {
      return (
        card.bizName
          .trim()
          .toLowerCase()
          .indexOf(this.state.search.trim().toLowerCase()) !== -1
      );
    });

    return (
      <div className="container">
        <PageHeader titleText="All Cards Page" />
        <div className="row">
          <div className="col-12">
            <section id="search-bar">
              <div className="row">
                <div className="col-12 my-5">
                  <div className="input-group mb-3">
                    <input
                      id="search-posts-field"
                      type="search"
                      value={this.state.search}
                      onChange={this.updateSearch.bind(this)}
                      className="form-control form-control-lg"
                      placeholder="&#xF002; search post "
                    />

                    <button onClick={this.handleFav}>Bookmark</button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="row">
          {filteredCards.length > 0 &&
            filteredCards.map((card) => (
              <Card key={card._id} card={card} user={this.state.user}>
                 
              </Card>
            ))}
        </div>
      </div>
    );
  }
}

export default AllCards;

// <div className="row">
// {filteredCards.length > 0 &&
//   filteredCards.map((card) => (
//     <div key={card._id} className="col-md-6 col-lg-4 mt-3">
//       <div className="card">
//         <img
//           width="100"
//           className="p-2"
//           src={card.bizImage}
//           alt={card.bizName}
//         />
//         <div className="card-body">
//           <h5 className="card-title">{card.bizName}</h5>
//           <p className="card-text">{card.bizDescription}</p>
//           <p className="card-text border-top p-2">
//             <b>Tel:</b>
//             {card.bizPhone}
//             <br />
//             {card.bizAddress}
//           </p>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>
