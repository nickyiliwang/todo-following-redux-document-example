import { combineReducers } from "redux";
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from "../actions";

// all 3 functions took care of each
// const initialState = {
//   visibilityFilter: VisibilityFilters.SHOW_ALL,
//   todos: []
// };

// destructuring
const { SHOW_ALL } = VisibilityFilters;

// state is empty array, reducer composition
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
      
    default:
      return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }
}

// replaced with combineReducers
// function todoApp(state = {}, action) {
//     return {
//       visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//       todos: todos(state.todos, action)
//     }
//   }

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
