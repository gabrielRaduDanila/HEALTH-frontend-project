import './AddProduct.css';
import { debounce } from 'lodash';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDiary } from '../../hooks/useUserDiary';
import {
  searchProducts,
  addDayProduct,
} from '../../features/user-diary/operations';
import {
  setSearchValue,
  resetFindedProducts,
  resetSearchValue,
  closeAddProduct,
} from '../../features/user-diary/diarySlice';
import Notiflix from 'notiflix';
import { getDailyInfo } from '../../features/user-data/operations';

const AddProduct = () => {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const gramsRef = useRef();
  const { searchValue, findedProducts, date } = useDiary();
  const [productCalories, setProductCalorie] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = nameRef.current.value;
    const weight = gramsRef.current.value;
    const calories = (weight * productCalories) / 100;
    if (findedProducts.length > 0) {
      return Notiflix.Notify.failure('Please select a product from the list');
    }
    const sendDate = date ? new Date(date) : new Date();
    const newDate = sendDate.toLocaleDateString();

    await dispatch(addDayProduct({ date: newDate, title, weight, calories }));
    dispatch(resetFindedProducts());
    dispatch(resetSearchValue());
    dispatch(getDailyInfo({ date: newDate }));
    gramsRef.current.value = '';
  };

  const handleChange = () => {
    const typedValue = nameRef.current.value;
    dispatch(setSearchValue(typedValue));
    if (typedValue.length > 0) {
      dispatch(debounce(searchProducts(typedValue), 300));
    } else {
      dispatch(resetFindedProducts());
    }
  };
  return (
    <div className='add-product-form-container'>
      <form className='add-product-form' onSubmit={handleSubmit}>
        <label>
          <input
            className='product-input product-name-input'
            name='productName'
            type='text'
            placeholder='Enter product name'
            required
            value={searchValue}
            onChange={handleChange}
            ref={nameRef}
            autoComplete='off'
          />
        </label>
        <label>
          <input
            className='product-input product-grams'
            type='number'
            name='productGrams'
            placeholder='Grams'
            required
            ref={gramsRef}
          />
        </label>
        <button type='submit' className='add-btn'>
          +
        </button>
        <button
          type='submit'
          className='mobile-add-btn'
          onClick={() => dispatch(closeAddProduct())}
        >
          Add
        </button>
      </form>
      {findedProducts.length > 0 && (
        <ul className='finded-products'>
          {findedProducts.map((product, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  dispatch(setSearchValue(product.title));
                  dispatch(resetFindedProducts());
                  setProductCalorie(product.calories);
                }}
              >
                {product.title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default AddProduct;
