import {
  SET_CURRENT_USER,
  LOGOUT,
  SET_ID_DIENTHOAI,
} from '../actions/Auth.action';
import isEmpty from '../../common/Is-Empty';

export default function (state, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        sinhvien: action.payload,
        thongtinSinhvien: action.thongtinSinhvien,
      };
    case LOGOUT: {
      return {
        isAuthenticated: false,
        sinhvien: null,
        thongtinSinhvien: null,
      };
    }

    default:
      return state;
  }
}
