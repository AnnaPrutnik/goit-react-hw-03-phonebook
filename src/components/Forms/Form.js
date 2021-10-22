import { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import './Forms.scss';

const INITIAL_STATE = { name: '', number: '' };

class Form extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handlerChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handlerSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { addContact } = this.props;
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    addContact(newContact);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { handlerChange, handlerSubmit } = this;
    const { name, number } = this.state;
    return (
      <form onSubmit={handlerSubmit} className="form">
        <div className="wrapper">
          <label className="label">
            Name
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              className="input"
              onChange={handlerChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>

          <label htmlFor="number" className="label">
            Number
            <input
              id="number"
              type="tel"
              name="number"
              value={number}
              className="input"
              onChange={handlerChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
        </div>
        <button type="submit" className="btn">
          Add contact
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default Form;
