import React from 'react';

const Form = props => (
  <form onSubmit={props.getRecipes} style={{ marginBottom: "20px" }} >
    <input className="form__input" type="text" name="recipeName" />
    <button className="form__button" >Search</button>
  </form>
);

export default Form;