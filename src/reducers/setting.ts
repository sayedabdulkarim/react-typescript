import { Reducer } from 'redux';

const REQUEST_SETTINGS = 'REQUEST_SETTINGS';
const ERROR_SETTINGS = 'ERROR_SETTINGS';
const RECEIVE_SETTINGS = 'RECEIVE_SETTINGS';

const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
const ERROR_CATEGORIES = 'ERROR_CATEGORIES';

const REQUEST_BUDGET = 'REQUEST_BUDGET';
const RECEIVE_BUDGET = 'RECEIVE_BUDGET';
const ERROR_BUDGET = 'ERROR_BUDGET';

interface categoryItem { 
}

interface StateType {
  categories: {
    items: Array<categoryItem>,
    isLoading: Boolean,
    error: typeof Error | null,
  },
  budget: {
    total: Number,
    isLoading: Boolean,
    error: typeof Error | null,
  },
  isLoading: Boolean,
  error: typeof Error | null,
}

const initialState:StateType = {
  categories: {
    items: [],
    isLoading: false,
    error: null,
  },
  budget: {
    total: 0,
    isLoading: false,
    error: null,
  },
  isLoading: false,
  error: null,
};

const reducer:Reducer<StateType> = (state=initialState, action) => {
  switch (action.type) {

    case REQUEST_SETTINGS: {
      let newState = {
        ...state,
        isLoading: true,
        error: null,
      }
      return newState;
    }

    case RECEIVE_SETTINGS: {
      let newCategories = {
        ...state.categories,
        items: action.categories,
        isLoading: false,
        error: null,
      };
      let newBudget = {
        ...state.budget,
        total: action.budget,
        isLoading: false,
        error: null,
      };
      return {
        ...state,
        categories: newCategories,
        budget: newBudget,
        isLoading: false,
        error: null,
      };
    }

    case ERROR_SETTINGS: {
      let newState = {
        ...state,
        isLoading: false,
        error: action.error,
      }
      return newState;
    }

    case REQUEST_CATEGORIES: {
      let newCategories = {
        ...state.categories,
        isLoading: true,
      };
      return {
        ...state,
        categories: newCategories,
      };
    }

    case RECEIVE_CATEGORIES: {
      let newState = {
        ...state,
        categories: {
          items: action.categories,
          isLoading: false,
          error: null,
        },
      }
      return newState;
    }

    case ERROR_CATEGORIES: {
      let newCategories = {
        ...state.categories,
        error: action.error,
        isLoading: false,
      };
      return {
        ...state,
        categories: newCategories,
      };
    }

    case REQUEST_BUDGET: {
      let newBudget = {
        ...state.budget,
        isLoading: true,
      };
      return {
        ...state,
        budget: newBudget,
      };
    }

    case RECEIVE_BUDGET: {
      let newState = {
        ...state,
        budget: {
          total: action.budget,
          isLoading: false,
          error: null,
        },
      }
      return newState;
    }

    case ERROR_BUDGET: {
      let newBudget = {
        ...state.budget,
        error: action.error,
        isLoading: false,
      };
      return {
        ...state,
        budget: newBudget,
      };
    }

    default: {
      return state;
    }

  }
}

export default reducer;
