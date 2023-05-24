import { useDispatch } from 'react-redux';
import { Input } from './Filter.styled';
import { getFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleSearch = e => {
    const value = e.target.value;
    dispatch(getFilter(value));
  };

  return (
    <form>
      <Input
        type="text"
        name="filter"
        onChange={handleSearch}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
    </form>
  );
};
