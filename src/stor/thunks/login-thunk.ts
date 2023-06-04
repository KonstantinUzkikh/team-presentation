import { AppDispatch, AppThunk } from '../types-store';
import { apiFlagDown, apiFlagUp, apiError, getLoginSuccess } from '../actions';
import { writeToken, writePassword, endPoints } from '../../utils';
import { getProfile } from '../../services/get-data';
import type { TValues } from '../../hooks/useFormAndValidation';
import { TLoginResponse, TUser } from '../../services/types-data';

export const getLoginThunk = (
  userData: TValues, user: TUser, goPath: () => void
): AppThunk => (dispatch: AppDispatch) => {
  dispatch(apiFlagUp());
  getProfile(endPoints.login, userData)
    .then((res: TLoginResponse) => {
      writeToken(res.token);
      writePassword(userData.password);
      dispatch(apiFlagDown());
      dispatch(getLoginSuccess(userData.email, userData.password, user));
      goPath();
    })
    .catch((res: Response) => {
      res.status === 400
        ? dispatch(apiError('Ошибка 400: пользователь не найден'))
        : dispatch(apiError(`Error. Status: ${res.status}`));
    })
}
