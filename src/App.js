const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement('h1', {}, "Sirius"),
    React.createElement('h2', {}, "Dog"),
    React.createElement('h2', {}, "Chocolate Lab")
  ]);
}

const App = () => {
  return React.createElement("div", {}, [
    React.createElement('h1', {}, 'Adoption Purfected!'),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet)
  ]);
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))


