import { handleActions } from "redux-actions";
import { THEME } from "../../common/utils/contant";
import { loadingAction, setThemeAction } from "../actions";
const initialState = {
  isLoading: false,
  theme: THEME.DARK,
};
export default handleActions(
  {
    [loadingAction.toString()]: (state, { payload }) => ({
      ...state,
      isLoading: payload,
    }),
    [setThemeAction.toString()]: (state, { payload }) => ({
      ...state,
      theme: payload,
    }),
  },
  initialState
);
