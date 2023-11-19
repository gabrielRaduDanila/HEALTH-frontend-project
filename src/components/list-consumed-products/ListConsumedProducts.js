import './ListConsumedProducts.css';
import '../add-product/AddProduct.css';
import { selectDailyInfo } from '../../features/user-data/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../../features/user-diary/operations';
import { deleteProduct } from '../../features/user-data/userDataSlice';

const ListConsumedProducts = () => {
  const dispatch = useDispatch();
  const dailyInfo = useSelector(selectDailyInfo);
  const products = dailyInfo.dayProducts;

  const handleDelete = (_id) => {
    dispatch(removeProduct(_id));
    dispatch(deleteProduct(_id));
  };

  return (
    <ul className='day-products-list'>
      {products.map((product) => {
        const { _id, title, calories, weight } = product;

        return (
          <li key={_id} className='day-products-list-item'>
            <p className='product-input name-product product-list-item'>
              {title}
            </p>
            <p className='product-input weight-product product-list-item'>
              {weight} g
            </p>
            <p className='product-input calories-product product-list-item'>
              {calories} kcal
            </p>
            <button
              className='delete-btn'
              onClick={() => handleDelete({ _id })}
            >
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ListConsumedProducts;
