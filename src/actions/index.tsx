export const incrementCounter = (delta: number): IncrementAction => ({ type: "INCREMENT_COUNTER", delta });

export const decrementCounter = (delta: number): DecrementAction => ({ type: "DECREMENT_COUNTER", delta });

export const resetCounter = (): ResetAction => ({ type: "RESET_COUNTER", delta:0 });

type ActionType = IncrementAction | DecrementAction | ResetAction;

export default ActionType;

export interface Action {
  readonly type: string;
}

export interface IncrementAction extends Action {
  delta: number;
}

export interface DecrementAction extends Action {
  delta: number;
}

export interface ResetAction extends Action {
  delta: number;
}
