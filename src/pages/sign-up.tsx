import { FC, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from '../hooks/useForm';
import ButtonForm from '../components/button-form/button-form';

import pageLayout from '../pages/page.module.css';
import formLayout from './form.module.css';

const SignUpPage: FC = () => {

  const navigate = useNavigate();

  const { values, handleChange } = useForm({ name: '', email: '', password: '', password2: ''});

  const onSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    //dispatch(getSignUpThunk(values, () => navigate('/team')));
  }

  return (
    <div className={formLayout.formPage}>
      <form onSubmit={onSubmit} className={formLayout.form}>
        <h3 className={pageLayout.h3Style}>Регистрация</h3>
        <div className={formLayout.inputGroup}>
          <label htmlFor='name' className={pageLayout.textStyle}>Имя</label>
          <input
            name='name'
            id='name'
            value={values.name}
            onChange={handleChange}
            required
            className={`${formLayout.inputStyle} ${formLayout.name}`}
          />
          <span className={formLayout.errorStyle} id='nameError'></span>
        </div>
        <div className={formLayout.inputGroup}>
          <label htmlFor='email' className={pageLayout.textStyle}>Электронная почта</label>
          <input
            type='email'
            name='email'
            id='email'
            value={values.email}
            onChange={handleChange}
            required
            className={`${formLayout.inputStyle} ${formLayout.email}`}
          />
          <span className={formLayout.errorStyle} id='emailError'></span>
        </div>
        <div className={formLayout.inputGroup}>
          <label htmlFor='pass' className={pageLayout.textStyle}>Пароль</label>
          <input
            type='password'
            name='pass'
            id='pass'
            value={values.password}
            onChange={handleChange}
            required
            className={`${formLayout.inputStyle} ${formLayout.pass}`}
          />
          <span className={formLayout.errorStyle} id='passError'></span>
        </div>
        <div className={formLayout.inputGroup}>
          <label htmlFor='password2' className={pageLayout.textStyle}>Подтвердите пароль</label>
          <input
            type='password'
            name='password2'
            id='password2'
            value={values.password2}
            onChange={handleChange}
            required className={`${formLayout.inputStyle} ${formLayout.pass}`}
          />
          <span className={formLayout.errorStyle} id='password2Error'></span>
        </div>
        <ButtonForm>Зарегистрироваться</ButtonForm>
      </form>
    </div>
  );
}

export default SignUpPage;
