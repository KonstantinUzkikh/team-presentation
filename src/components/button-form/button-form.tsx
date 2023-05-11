import { FC } from 'react';

import buttonFormLayout from './button-form.module.css';

const ButtonForm: FC<{
  value?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  children?: string
}> = ({ value, type, children }) => {
  return (
    <button type={type || 'submit'} value={value || ''} className={buttonFormLayout.button}>
      {children !== undefined && <span>{children}</span>}
    </button>
  );
}

export default ButtonForm;
