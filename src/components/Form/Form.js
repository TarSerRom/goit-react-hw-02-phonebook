import React, { Component } from "react";
import PropTypes from "prop-types";
import './Form.css'
import { nanoid } from "nanoid";



class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
      id: nanoid(),
    });
  };

  render() {
    const { name, number } = this.state;
    const { handleSubmit, handleInputChange } = this;

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label className="form_label">
            Name
            <input
              className="form_input"
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label className="form_label">
            Number
            <input
              className="form_input"
              type="tel"
              name="number"
              value={number}
              onChange={handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button className="form_setting-contact" type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

Form.propTypes = {
  number: PropTypes.number,
  name: PropTypes.string
};

export default Form;