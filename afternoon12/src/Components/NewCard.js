import React, { Component } from "react";

class NewCard extends Component {
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
                onChange={e =>
                  this.props.handleStateChange(e.target.value, "userNameInput")
                }
              />
            </div>
            <div className="inputBox">
              <p>Hometown: </p>
              <input
                className="input"
                onChange={e =>
                  this.props.handleStateChange(
                    e.target.value,
                    "userHometownInput"
                  )
                }
              />
            </div>
            <div className="inputBox">
              <p>Home Country: </p>
              <input
                className="input"
                onChange={e =>
                  this.props.handleStateChange(
                    e.target.value,
                    "userHomeCountryInput"
                  )
                }
              />
            </div>
            <div className="inputBox">
              <p>Employer: </p>
              <input
                className="input"
                onChange={e =>
                  this.props.handleStateChange(
                    e.target.value,
                    "userEmployerInput"
                  )
                }
              />
            </div>
            <div className="inputBox">
              <p>Title: </p>
              <input
                className="input"
                onChange={e =>
                  this.props.handleStateChange(e.target.value, "userTitleInput")
                }
              />
            </div>
            <div className="inputBox">
              <p>Top 3 Favorite Movies:</p>
              <div className="movieInputs">
                <input
                  className="input"
                  onChange={e =>
                    this.props.handleStateChange(e.target.value, "movie1Input")
                  }
                />
                <input
                  className="input"
                  onChange={e =>
                    this.props.handleStateChange(e.target.value, "movie2Input")
                  }
                />
                <input
                  className="input"
                  onChange={e =>
                    this.props.handleStateChange(e.target.value, "movie3Input")
                  }
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
