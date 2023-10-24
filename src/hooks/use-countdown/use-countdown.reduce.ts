const DEFAULT_TIMER_VALUE = 60;

export const initialState = {
  counter: DEFAULT_TIMER_VALUE,
  isCounting: false,
  finishCounting: false,
};

type State = typeof initialState;
type Action = { type: string };

type Reducer<S, A> = (prevState: S, action: A) => S;

export const countdownReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "DECREMENT_COUNTER": {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }

    case "START_COUNTDOWN": {
      return {
        ...state,
        isCounting: true,
        finishCounting: false,
      };
    }

    case "STOP_COUNTDOWN": {
      return {
        counter: DEFAULT_TIMER_VALUE,
        isCounting: false,
        finishCounting: true,
      };
    }

    default:
      return state;
  }
};
