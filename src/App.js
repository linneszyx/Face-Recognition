import React, { Component } from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Rank from "./Components/Rank/Rank";
import Particle from "./Components/Particle/Particle";
import FaceRecognise from "./Components/FaceRecognise/FaceRecognise";
import Clarifai from "clarifai";
const app = new Clarifai.App(
{
  apiKey: "92dd1c6bc3c241e0a81e9bbee3cc2613",
}
);
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
    };
  }
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };
  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models.predict( {
      id: "a403429f2ddf4b49b307e318f00e528b",
      version: "c0c0ac362b03416da06ab3fa36fb58e3",
      }, this.state.input  )
      .then(
        function (response) {
          console.log(
            response.outputs[0].data.regions[0].region_info.bounding_box
          );
        },
        function (err) {
          // there was an error
        }
      );
  };

  render() {
    return (
      <div className="App">
        <Particle className="particles" />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognise imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}
export default App;
