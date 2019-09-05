import { Reducer } from 'redux';

const RECEIVE = 'RECEIVE_EXPENSE';
const ERROR = 'ERROR_EXPENSE';
const ADD = 'ADD_EXPENSE';

interface ExpenseItem {
}

interface StateType {
  items: Array<ExpenseItem>,
  details: any,
  isFetching: Boolean,
  error: Error | null,
}

const initialState:StateType = {
  items: [],
  details: {
    // [id]: {
      // isLoading: false,
      // error: null,
    // }
  },
  isFetching: false,
  error: null,
};

const reducer:Reducer<StateType> = (state=initialState, action:any) => {
  switch (action.type) {

    case RECEIVE: {
      return {
        ...state,
        items: action.items,
        isFetching: false,
        error: null,
      };
    }

    case ADD: {
      return state;
    }

    case ERROR: {
      return state;
    }

    default: {
      return state;
    }

  }
}

export default reducer;
