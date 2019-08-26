import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: "1", name: 'Harshal', age: 21 }, 
      { id: "2", name: 'Kunj', age: 22 },
      { id: "3", name: 'Punit' ,age: 22 }
    ],
    otherState: 'other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer' 
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            name={person.name} 
            age={person.age}
            click={ () => this.deletePersonHandler(index) } 
            key={ person.id }
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
    }

    let cssClasses = [];
    if (this.state.persons.length <= 2) {
      cssClasses.push('red');
    }
    if (this.state.persons.length <= 1) {
      cssClasses.push('bold');
    }

    return (
        <div className="App">
          <h1>Hi, I'm a React app</h1>
          <p className={cssClasses.join(' ')}>This is really working!</p>
          <button
            style={style} 
            onClick={ this.togglePersonsHandler }>Toggle Persons</button> 
          { persons }
        </div>
    );
  }
}

export default App;
