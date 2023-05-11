import { FC, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from '../hooks/useForm';
import ButtonForm from '../components/button-form/button-form';

import pageLayout from '../pages/page.module.css';
import formLayout from './form.module.css';

const LoginPage: FC = () => {

  const navigate = useNavigate();

  const { values, handleChange } = useForm({ email: '', password: '' });

  const onSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    //dispatch(getLoginThunk(values, () => navigate('/team')));
  }

return (
    <div className={formLayout.formPage}>
      <form onSubmit={onSubmit} className={formLayout.form}>
        <h3 className={pageLayout.h3Style}>Вход в личный кабинет</h3>
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
        <ButtonForm>Войти</ButtonForm>
        <div className={formLayout.buttonGroup}>
          <span className={pageLayout.textStyle}>Вы — новый пользователь?</span>
          <button onClick={() => navigate('/sign-up')} className={formLayout.buttonSignUp}>Зарегистрироваться</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
