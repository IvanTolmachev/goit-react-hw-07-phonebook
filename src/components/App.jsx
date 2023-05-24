import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, Title, TitleH2 } from '../components/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operation';
import spinner from 'components/spinner/spinner';
import { IsLoading, filteredContacts } from 'redux/selectors';

export const App = () => {
  const filterListContacts = useSelector(filteredContacts);
  const dispatch = useDispatch();
  const loader = useSelector(IsLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <TitleH2>Contacts</TitleH2>
      <Filter />
      {loader ? spinner() : <ContactList />}
      {!filterListContacts.length && !loader && <h2>No contacts</h2>}
    </Container>
  );
};
