import { useSelector, useDispatch } from 'react-redux';
import { getDailyCalories } from '../../features/dailyCalories/operations';
import './HomePageForm.css';
import Backgroud from '../backgroud/Backgroud';

const HomePageForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget; // Accesează formularul curent

    const height = form.querySelector('input[name="height"]').value;
    const age = form.querySelector('input[name="age"]').value;
    const currentWeight = form.querySelector(
      'input[name="currentWeight"]'
    ).value;
    const desiredWeight = form.querySelector(
      'input[name="desiredWeight"]'
    ).value;

    const selectedBloodType = form.querySelector(
      'input[name="bloodType"]:checked'
    ).value;
    const credentials = {
      height,
      age,
      currentWeight,
      desiredWeight,
      bloodType: selectedBloodType,
    };
    dispatch(getDailyCalories(credentials));
  };
  return (
    <main>
      <h2 className='form-title'>
        Calculate your daily calorie intake right now
      </h2>
      <form onSubmit={handleSubmit} className='home-page-form'>
        <label>
          <input
            type='number'
            name='height'
            placeholder='Height *'
            className='form-input'
          />
        </label>

        <label>
          <input
            type='number'
            name='age'
            placeholder='Age *'
            className='form-input'
          />
        </label>

        <label>
          <input
            type='number'
            name='currentWeight'
            placeholder='Current Weight *'
            className='form-input'
          />
        </label>

        <label>
          <input
            type='number'
            name='desiredWeight'
            placeholder='Desired Weight *'
            className='form-input'
          />
        </label>
        <div className='radio-container'>
          <p className='blood-type'>Blood Type *</p>
          <div className='blood-inputs'>
            <label>
              <input
                type='radio'
                name='bloodType'
                value='1'
                className='blood-input'
              />
              <div className='customRadio'></div>1
            </label>

            <label>
              <input
                type='radio'
                name='bloodType'
                value='2'
                className='blood-input'
              />
              <div className='customRadio'></div>2
            </label>

            <label>
              <input
                type='radio'
                name='bloodType'
                value='3'
                className='blood-input'
              />
              <div className='customRadio'></div>3
            </label>

            <label>
              <input
                type='radio'
                name='bloodType'
                value='4'
                className='blood-input'
              />
              <div className='customRadio'></div>4
            </label>
          </div>
        </div>
        <button type='submit' className='submit-btn'>
          Start losing weight
        </button>
      </form>
      <Backgroud />
    </main>
  );
};
export default HomePageForm;
