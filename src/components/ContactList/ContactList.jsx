import { useSelector, useDispatch } from 'react-redux';
import { List, Item, Name, NumberName, DeleteBtn } from './ContactList.styled';
import { deleteContact } from 'redux/operation';
import { filteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filterList = useSelector(filteredContacts);
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
