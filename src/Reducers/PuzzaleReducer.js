// export const types = {
//   ADD_DATA: `ADD_DATA`,
// };

// export const addData = (data) => ({
//   type: types.ADD_DATA,
//   data,
// });

// export default function (state = {}, action) {
//   switch (action.type) {
//     case types.ADD_DATA: {
//       return {
//         ...state,
//         data: action.data,
//       };
//     }
//     default:
//       return state;
//   }
// }

// let data = [];
// export function dataReducer(state = {}, action) {
//   switch (action.type) {
//     case types.ADD_DATA:
//       data.push(action.value);
//       return {
//         ...state,
//         data: action.data,
//       };
//     default:
//       return state;
//   }
// }

export const types = {
  ADD_DATA: `ADD_DATA`,
};

// import { SET_VISIBILITY_FILTER } from '../constants/ActionTypes'
// import { SHOW_ALL } from '../constants/TodoFilters'

export const setRotateData = (filter) => ({ type: types.ADD_DATA, filter });
const intialState = { data: 0 };

const puzzaleReducer = (state = intialState, action) => {
  console.log('=====', action);
  switch (action.type) {
    case types.ADD_DATA:
      return { ...state, data: action.filter };
    default:
      return state;
  }
};

export default puzzaleReducer;
