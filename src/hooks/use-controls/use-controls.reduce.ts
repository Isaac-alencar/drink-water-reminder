type Reducer<S, A> = (prevState: S, action: A) => S;

export const initialState = {
  dailyGoal: 50,
  quantityPerTimer: 100,
  currentIteration: 4,
  currentProgress: 0,
};

type State = typeof initialState;
type Action = {
  type: string;
  payload?: any;
};

export const controlReducer: Reducer<State, Action> = (state, action) => {
  const dailyGoalMaxValue = 3000;
  const quantityPerTimerMaxValue = 300;

  const dailyGoalPercentage = (dailyGoalMaxValue * state.dailyGoal) / 100;
  const quantityPerTimerPercentage =
    (quantityPerTimerMaxValue * state.quantityPerTimer) / 100;

  const totalIterations = dailyGoalPercentage / quantityPerTimerPercentage;

  switch (action.type) {
    case "SET_DAILY_GOAL": {
      return {
        ...state,
        dailyGoal: action.payload,
      };
    }

    case "SET_QUANTITY_PER_TIMER": {
      return {
        ...state,
        quantityPerTimer: action.payload,
      };
    }

    case "COMPLETE_ITERATION": {
      if (state.currentIteration === totalIterations) {
        return state;
      }

      return {
        ...state,
        currentIteration: state.currentIteration + 1,
      };
    }

    case "UPDATE_PROGRESS": {
      return {
        ...state,
        currentProgress: (state.currentIteration / totalIterations) * 100,
      };
    }

    default:
      return state;
  }
};
