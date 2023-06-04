import { TRegisterResponse, TUser } from '../../services/types-data';
import { AppDispatch, AppThunk } from '../types-store';
import { getProfile } from '../../services/get-data';
import { writeToken, writePassword, endPoints } from '../../utils';
import type { TValues } from '../../hooks/useFormAndValidation';
import { apiFlagDown, apiFlagUp, apiError, getRegisterSuccess } from '../actions';

export const getRegisterThunk = (
  userData: TValues, user: TUser, goPath: () => void
): AppThunk => (dispatch: AppDispatch) => {
  dispatch(apiFlagUp());
  getProfile(endPoints.register, userData)
    .then((res: TRegisterResponse) => {
      writeToken(res.token);
      writePassword(userData.password);
      dispatch(apiFlagDown());
      dispatch(getRegisterSuccess(userData.email, userData.password, userData.name, res.id, user));
      goPath();
    })
    .catch((res: Response) => {
      res.status === 400
        ? dispatch(apiError('Ошибка 400: регистрация завершается успешно только для заданных пользователей.'))
        : dispatch(apiError(`Error. Status: ${res.status}`));
    })
}
