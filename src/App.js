import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
      terms: false
    }
  }

  render() {
    return (
      <div>
        <h1>Salúdame</h1>
        <h5>Ingresa tu nombre:</h5>
        <input type="text" value={this.state.name} onChange={this.updateName.bind(this)} />
        <button onClick={this.sayHi.bind(this)}>Salúdame</button>
        <div>
          <label>
            <input type="checkbox" checked={this.state.terms} onClick={this.updateTerms.bind(this)} />Acepto los términos y condiciones
          </label>
        </div>

      </div>
    );
  }

  updateTerms(event) {
    this.setState({
      terms: event.target.checked
    });
  }

  updateName(event){
    this.setState({
      name: event.target.value
    });
  }

  sayHi() {
    if (this.state.terms) {
      alert('Hola ' + this.state.name);
    } else {
      alert("Debes aceptar los términos y condiciones");
    }
  }

}

export default App;
