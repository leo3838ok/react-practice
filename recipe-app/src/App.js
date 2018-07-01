import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';
import Recipes from './components/Recipes';

const API_KEY = "05e2b3b0898d83ba4ea4be5ae0cac3a7";

class App extends Component {
  state = {
    recipes: []
  }

  componentWillMount = () => {
    const recipes = localStorage.getItem("recipes");
    this.setState({ recipes: JSON.parse(recipes) });
  }

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }

  getRecipes = async (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipes={ this.getRecipes } />
        <Recipes recipes={ this.state.recipes } />
      </div>
    );
  }
}

export default App;
