import React from "react";
import { render } from "react-dom";
import pf from "petfinder-client";
import Pet from "./Pet";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }
  componentDidMount() {
    petfinder.pet
      .find({ output: "full", location: "Piscataway, NJ" })
      .then(data => {
        let pets;

        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }
        this.setState({
          pets
        });
      });
  }
  render() {
    return (
      <div>
        <h1>Adoption Purfected!</h1>
        <div>
          {this.state.pets.map(pet => {
            let breed;
            if (Array.isArray(pet.breeds.breed)) {
              breed = pet.breeds.breed.join(", ");
            }
            return (
              <Pet
                key={pet.id}
                animal={pet.animal}
                name={pet.name}
                breed={breed}
                media={pet.media}
                locatiom={`${pet.contact.city}, ${pet.contact.state}`}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
