import React from "react";
import { Link } from "react-router-dom";

const API_KEY = "05e2b3b0898d83ba4ea4be5ae0cac3a7";

class Recipe extends React.Component {
  state = {
    recipe: null
  }

  componentDidMount = async () => {
    const recipeId = this.props.match.params.id;
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/get?key=${API_KEY}&rId=${recipeId}`);
    const data = await api_call.json();
    this.setState({ recipe: data.recipe });
  }

  render() {
    return (
      <div className="container" >
        { this.state.recipe &&
          <div className="active-recipe">
            <img className="active-recipe__img" src={ this.state.recipe.image_url } alt={ this.state.recipe.title } />
            <h3 className="active-recipe__title">{ this.state.recipe.title }</h3>
            <h4 className="active-recipe__publisher">
              Publisher: <span>{ this.state.recipe.publisher }</span>
            </h4>
            <p className="active-recipe__website">Website: 
              <span><a href={ this.state.recipe.publisher_url } >{ this.state.recipe.publisher_url }</a></span>
            </p>
            <button className="active-recipe__button" >
              <Link to="/" >Go Home</Link>
            </button>
          </div>
        }
      </div>
    );
  }
};

export default Recipe;