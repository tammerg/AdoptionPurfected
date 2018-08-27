import React from "react";
import { render } from "react-dom";
import pf from "petfinder-client";
import Pet from "./Pet";

const petfinder = pf({
  key: process.env.API_Key,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  componentDidMount() {
    const promise = petfinder.breed.list({ animal: "dog" });

    promise.then(console.log, console.error);
  }
  render() {
    return (
      <div>
        <h1>Adoption Purfected!</h1>
        <Pet name="Sirius" animal="Dog" breed="Australian Cattle Dog" />
        <Pet name="Petunia" animal="Cat" breed="Mixed" />
        <Pet name="Molly" animal="Dog" breed="Who Knows" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
