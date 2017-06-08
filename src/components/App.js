import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [  {
          "id": "5c142d9e-ea45-4231-8146-cccf71c704c0",
          "type": "dog",
          "gender": "male",
          "age": 4,
          "weight": 1,
          "name": "Trident"
        },
        {
          "id": "a7c8b608-0d39-401b-a693-1bc882f21425",
          "type": "dog",
          "gender": "male",
          "age": 1,
          "weight": 1,
          "name": "Paws"
        }],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    }
    this.handleAdoptPet = this.handleAdoptPet.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.findPets = this.findPets.bind(this)
  }

  handleAdoptPet(id){
    this.setState(state => ({ adoptedPets: [...state.adoptedPets, id] }))
  }

  handleFilterChange(filter){
    this.setState({
      filters: {type: filter}
    })
  }

  findPets(){
    const baseUrl = '/api/pets'
    if (this.state.filters.type !== 'all') {
      fetch(`${baseUrl}?type=${this.state.filters.type}`)
        .then(res => res.json())
        .then(pets => this.setState({pets}))
    } else {
      fetch(baseUrl)
        .then(res => res.json())
        .then(pets => this.setState({pets}))
    }


  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={ this.state.filters } onChangeType={this.handleFilterChange} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handleAdoptPet} pets={this.state.pets} adoptedPets={this.state.adoptedPets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
