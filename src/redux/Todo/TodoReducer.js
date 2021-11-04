import TodoActionTypes from "./TodoActionTypes";

const ITEMS = [
  {
    title: "Ali Connors",
    image: "https://i.pravatar.cc/300",
    description: "I'll be in your neighborhood doing errands this…",
  },
  {
    title: "Apina Apinan",
    image: "https://i.pravatar.cc/100",
    description: "I'll be in your neighborhood doing errands this…",
  },
  {
    title: "Suthicha Poonakaow",
    image: "https://i.pravatar.cc/500",
    description: "I'll be in your neighborhood doing errands this…",
  },
  {
    title: "Krisada Kowi",
    image: "https://i.pravatar.cc/600",
    description:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
  },
];

const INITIAL_STATE = {
  todos: ITEMS,
  isLoading: false,
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO_START:
      return {
        ...state,
        isLoading: true,
      };
    case TodoActionTypes.ADD_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case TodoActionTypes.DELETE_TODO_START:
      return {
        ...state,
        isLoading: true,
      };
    case TodoActionTypes.DELETE_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
