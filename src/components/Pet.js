import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
    this.onAdopt = this.onAdopt.bind(this)
  }

  genderSymbol(){
    return this.props.pet.gender === 'male' ? '♂' : '♀'
  }

  onAdopt(){
    this.props.onAdoptPet( this.props.pet.id )
  }

  adoptButton(){
    if (this.props.isAdopted){
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button onClick={this.onAdopt} className="ui primary button">Adopt pet</button>
    }
  }

  render() {
    const {pet} = this.props

    return (
      <div className="card">
        <div className="content">
          <a className="header">{pet.name} gender: { this.genderSymbol() }</a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          { this.adoptButton() }
        </div>
      </div>
    );
  }
}

export default Pet;
