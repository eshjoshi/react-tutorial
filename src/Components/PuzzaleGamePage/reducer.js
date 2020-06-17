export const types = {
  ADD_DATA: `ADD_DATA`,
};

export const addData = (data) => ({
  type: types.ADD_DATA,
  data,
});

export default function (state = {}, action) {
  switch (action.type) {
    case types.ADD_DATA: {
      return {
        ...state,
        data: action.data,
      };
    }
    default:
      return state;
  }
}

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
