import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { THEME } from "../common/utils/contant";
import { setThemeAction } from "../redux/actions";

const SwitchTheme = () => {
  const theme = useSelector((state) => state.theme);
  const dark = theme === THEME.DARK ? true : false;
  const dispatch = useDispatch();
  const setTheme = () => {
    dispatch(setThemeAction(dark ? THEME.LIGHT : THEME.DARK));
  };
  return (
    <div className="cs-switch-theme">
      <input
        type="checkbox"
        id="toggle"
        className="toggle--checkbox"
        checked={dark}
        onChange={setTheme}
      />
      <label for="toggle" className="toggle--label">
        <span className="toggle--label-background"></span>
      </label>
    </div>
  );
};

export default SwitchTheme;
