import React, { Component } from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Rank from "./Components/Rank/Rank";
import Particle from "./Components/Particle/Particle";
import FaceRecognise from "./Components/FaceRecognise/FaceRecognise";
import Clarifai from "clarifai";
const app = new Clarifai.App({
  apiKey: "92dd1c6bc3c241e0a81e9bbee3cc2613",
});
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
    };
  }
  calculateFaceLocation = (data) => {
    const clarifaiFace =
    data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };
  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => this.calculateFaceLocation(response))
      .catch((err) => console.log(err));
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
