import React, { Component } from "react";
import data from "./data";
// import logo from "./logo.svg";
import "./App.css";
import Person from "./Components/Person";
import NewCard from "./Components/NewCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: data,
      index: 0,
      userNameInput: "",
      userHometownInput: "",
      userHomeCountryInput: "",
      userEmployerInput: "",
      userTitleInput: "",
      movie1Input: "",
      movie2Input: "",
      movie3Input: ""
    };
  }
  handlePrevious = index => {
    if (index === 0) {
      this.setState({ index: this.state.list.length - 1 });
    } else {
      this.setState({ index: index - 1 });
    }
  };

  handleEdit = () => {
    const nameArr = this.state.userNameInput.split(" ");
    const newPerson = {
      id: this.state.index + 1,
      name: { first: nameArr[0], last: nameArr[1] },
      city: this.state.userHometownInput,
      country: this.state.userHomeCountryInput,
      employer: this.state.userEmployerInput,
      title: this.state.userTitleInput,
      favoriteMovies: [
        this.state.movie1Input,
        this.state.movie2Input,
        this.state.movie3Input
      ]
    };
    console.log(newPerson);
    let arr = this.state.list;
    arr.splice(this.state.index, 1, newPerson);

    this.setState({
      list: arr
    });
  };

  handleDelete = list => {
    const tempArray = list;
    tempArray.splice(this.state.index, 1);
    this.setState({ list: tempArray });
  };

  handleStateChange = (value, name) => {
    this.setState({ [name]: value });
  };

  handleNew = () => {
    const nameArr = this.state.userNameInput.split(" ");
    const newPerson = {
      id: this.state.list.length,
      name: { first: nameArr[0], last: nameArr[1] },
      city: this.state.userHometownInput,
      country: this.state.userHomeCountryInput,
      employer: this.state.userEmployerInput,
      title: this.state.userTitleInput,
      favoriteMovies: [
        this.state.movie1Input,
        this.state.movie2Input,
        this.state.movie3Input
      ]
    };
    this.setState({ list: [...this.state.list, newPerson] });
    this.setState({ index: this.state.list.length });
  };

  handleNext = index => {
    if (index === this.state.list.length - 1) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: index + 1 });
    }
  };

  render() {
    return (
      <div className="App">
        <header>
          <p className="header">Home</p>
        </header>
        <div className="bottomBox">
          <div className="containerBox">
            <Person data={this.state.list} index={this.state.index} />
          </div>
          <nav>
            <button
              className="outerButton"
              onClick={() => this.handlePrevious(this.state.index)}
            >
              {"<Previous"}
            </button>
            <div className="midButtonGroup">
              <button className="midButton" onClick={() => this.handleEdit()}>
                Edit
              </button>
              <button
                className="midButton"
                onClick={() => this.handleDelete(this.state.list)}
              >
                Delete
              </button>
              <button className="midButton" onClick={() => this.handleNew()}>
                New
              </button>
            </div>
            <button
              className="outerButton"
              onClick={() => this.handleNext(this.state.index)}
            >
              Next>
            </button>
          </nav>

          <NewCard handleStateChange={this.handleStateChange} />
        </div>
      </div>
    );
  }
}

export default App;
