import './Filter.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'features/auth/authSlice';
import { selectFilter } from 'features/auth/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    const searchInput = e.target;
    const typedName = searchInput.value.trim();
    dispatch(addFilter({ typedName }));
  };

  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        className="filter-input"
        type="text"
        name="searchName"
        title="Type the contact you want to find"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};
export default Filter;
