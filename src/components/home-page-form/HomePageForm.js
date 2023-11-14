import './HomePageForm.css';
import Notiflix from 'notiflix';

const HomePageForm = ({ handleDispatch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
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

    if (
      !height ||
      !age ||
      !currentWeight ||
      !desiredWeight ||
      !selectedBloodType
    ) {
      return Notiflix.Notify.failure('Please add all your details');
    }

    const credentials = {
      height,
      age,
      currentWeight,
      desiredWeight,
      bloodType: selectedBloodType,
    };
    handleDispatch(credentials);
  };
  return (
    <main>
      <h2 className='form-title calculator-title'>
        Calculate your daily calorie intake right now
      </h2>
      <form onSubmit={handleSubmit} className='home-page-form'>
        <label>
          <input
            type='number'
            name='height'
            placeholder='Height *'
            className='form-input'
            required
          />
        </label>

        <label>
          <input
            type='number'
            name='age'
            placeholder='Age *'
            className='form-input'
            required
          />
        </label>

        <label>
          <input
            type='number'
            name='currentWeight'
            placeholder='Current Weight *'
            className='form-input'
            required
          />
        </label>

        <label>
          <input
            type='number'
            name='desiredWeight'
            placeholder='Desired Weight *'
            className='form-input'
            required
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
                defaultChecked
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
    </main>
  );
};
export default HomePageForm;
