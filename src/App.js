import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("You clicked the title");
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
