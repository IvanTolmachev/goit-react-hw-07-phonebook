import { useSelector, useDispatch } from 'react-redux';
import { List, Item, Name, NumberName, DeleteBtn } from './ContactList.styled';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const filterList = filter
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;
  return (
    <List>
      {filterList.map(({ id, name, number }) => (
        <Item key={id}>
          <Name>{name}:</Name> <NumberName>{number}</NumberName>
          <DeleteBtn
            onClick={() => {
              dispatch(deleteContact(id));
            }}
            type="button"
          >
            delete
          </DeleteBtn>
        </Item>
      ))}
    </List>
  );
};
