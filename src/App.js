const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};

class App extends React.Component {
  handleTitleClick() {
    alert("You clicked the title");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Adoption Purfected!"
      ),
      React.createElement(Pet, {
        name: "Sirius",
        animal: "Dog",
        breed: "Australian Cattle Dog"
      }),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Petunia",
        animal: "Cat",
        breed: "Short Hair"
      })
    ]);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
