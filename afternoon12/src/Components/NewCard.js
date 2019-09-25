import React, { Component } from "react";

class NewCard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h3>New Card</h3>
        <div className="newForm">
          <div>
            <div className="inputBox">
              <p>Name: </p>
              <input
                className="input"
                onChange={e => this.props.handleNameInput(e.target.value)}
              />
            </div>
            <div className="inputBox">
              <p>Hometown: </p>
              <input
                className="input"
                onChange={e => this.props.handleHometownInput(e.target.value)}
              />
            </div>
            <div className="inputBox">
              <p>Home Country: </p>
              <input
                className="input"
                onChange={e =>
                  this.props.handleHomeCountryInput(e.target.value)
                }
              />
            </div>
            <div className="inputBox">
              <p>Employer: </p>
              <input
                className="input"
                onChange={e => this.props.handleEmployerInput(e.target.value)}
              />
            </div>
            <div className="inputBox">
              <p>Title: </p>
              <input
                className="input"
                onChange={e => this.props.handleTitleInput(e.target.value)}
              />
            </div>
            <div className="inputBox">
              <p>Top 3 Favorite Movies:</p>
              <div className="movieInputs">
                <input
                  className="input"
                  onChange={e => this.props.handleMovie1Input(e.target.value)}
                />
                <input
                  className="input"
                  onChange={e => this.props.handleMovie2Input(e.target.value)}
                />
                <input
                  className="input"
                  onChange={e => this.props.handleMovie3Input(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewCard;
