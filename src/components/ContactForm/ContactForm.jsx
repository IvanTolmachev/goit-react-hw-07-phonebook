import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Form, Label, Input, AddBtn } from './ContactForm.styled';
import InputMask from 'react-input-mask';
import { addContact } from 'redux/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.contacts);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      window.alert(`Contact ${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ id: nanoid(), number, name }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label>
        Number
        <InputMask
          className="input-tel"
          mask="999-99-99"
          type="tel"
          name="number"
          placeholder="777-77-77"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <AddBtn type="submit">Add contact</AddBtn>
    </Form>
  );
};
