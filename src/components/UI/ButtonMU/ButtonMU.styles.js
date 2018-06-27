import { StyleSheet } from 'react-native';

import * as BUTTON_TYPES from '../../../constants/buttonTypes';
import * as COLORS from '../../../constants/colors';

const getBgClr = (btnType) => {
  switch (btnType) {
    case BUTTON_TYPES.PRIMARY:
      return COLORS.BUTTON_PRIMARY;
    case BUTTON_TYPES.SECONDARY:
      return COLORS.BUTTON_SECONDARY;
    case BUTTON_TYPES.SUCCESS:
      return COLORS.BUTTON_SUCCESS;
    case BUTTON_TYPES.INFO:
      return COLORS.BUTTON_INFO;
    case BUTTON_TYPES.WARNING:
      return COLORS.BUTTON_WARNING;
    case BUTTON_TYPES.DANGER:
      return COLORS.BUTTON_DANGER;
    case BUTTON_TYPES.DARK:
      return COLORS.BUTTON_DARK;
    default:
      return COLORS.BUTTON_BASIC;
  }
};

const getBorderClr = (btnType) => {
  switch (btnType) {
    case BUTTON_TYPES.BASIC:
    case BUTTON_TYPES.PRIMARY:
    case BUTTON_TYPES.SECONDARY:
    case BUTTON_TYPES.SUCCESS:
    case BUTTON_TYPES.INFO:
    case BUTTON_TYPES.DANGER:
    case BUTTON_TYPES.DARK:
      return COLORS.BORDER_LIGHT;
    default:
      return COLORS.BORDER_DARK;
  }
};

const getTextClr = (btnType) => {
  switch (btnType) {
    case BUTTON_TYPES.BASIC:
    case BUTTON_TYPES.PRIMARY:
    case BUTTON_TYPES.SECONDARY:
    case BUTTON_TYPES.SUCCESS:
    case BUTTON_TYPES.INFO:
    case BUTTON_TYPES.DANGER:
    case BUTTON_TYPES.DARK:
      return COLORS.TEXT_LIGHT;
    default:
      return COLORS.BORDER_DARK;
  }
};

const styles = btnType => StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: getBgClr(btnType),
    borderColor: getBorderClr(btnType),
  },
  disabled: {
    backgroundColor: COLORS.BUTTON_DISABLED,
    borderColor: COLORS.BORDER_DARK,
  },
  text: {
    color: getTextClr(btnType),
  },
  disabledText: {
    color: COLORS.TEXT_DARK,
  },
});

export default styles;
