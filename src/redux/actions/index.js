import { createActions } from "redux-actions";

const actions = createActions({
  LOADING_ACTION: null,
  SET_THEME_ACTION: null,
});
export const {
  loadingAction,
  setThemeAction
} = actions;