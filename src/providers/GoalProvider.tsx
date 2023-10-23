import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type SliderControlContextProps = {
  dailyGoal: number;
  totalIterations: number;
  quantityPerTimer: number;
  currentIteration: number;
  currentProgress: number;
  setDailyGoal: (value: number) => void;
  setQuantityPerTime: (value: number) => void;
  completeIterations: () => void;
};

export const SliderControlContext = createContext<SliderControlContextProps>(
  {} as SliderControlContextProps
);

export const SliderControlProvider = ({ children }: PropsWithChildren) => {
  const dailyGoalMaxValue = 3000;
  const quantityPerTimerMaxValue = 300;

  const [dailyGoal, setDailyGoal] = useState<number>(50);
  const [quantityPerTimer, setQuantityPerTime] = useState<number>(100);
  const [currentIteration, setCurrentIteration] = useState<number>(1);
  const [currentProgress, setCurrentProgress] = useState<number>(0);

  const dailyGoalPercentage = (dailyGoalMaxValue * dailyGoal) / 100;
  const quantityPerTimerPercentage =
    (quantityPerTimerMaxValue * quantityPerTimer) / 100;

  const totalIterations = dailyGoalPercentage / quantityPerTimerPercentage;

  const calculateProgress = useCallback(() => {
    setCurrentProgress((currentIteration / totalIterations) * 100);
  }, [currentIteration, totalIterations]);

  const completeIterations = useCallback(() => {
    setCurrentIteration((old) => {
      if (old === totalIterations) return old;

      return old + 1;
    });

    calculateProgress();
  }, [totalIterations, calculateProgress]);

  const value = useMemo(
    () => ({
      dailyGoal,
      totalIterations,
      currentIteration,
      quantityPerTimer,
      currentProgress,
      completeIterations,
      setDailyGoal,
      setQuantityPerTime,
    }),
    [
      dailyGoal,
      totalIterations,
      currentIteration,
      quantityPerTimer,
      currentProgress,
      completeIterations,
      setDailyGoal,
      setQuantityPerTime,
    ]
  );

  return (
    <SliderControlContext.Provider value={value}>
      {children}
    </SliderControlContext.Provider>
  );
};

export const useGoal = () => {
  const context = useContext(SliderControlContext);

  if (!context) {
    throw new Error("useGoal needs to be inside a GoalContext");
  }

  return context;
};
