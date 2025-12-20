// src/reducers/tarotReducer.ts
import { ITarotState, TarotAction } from '../types';

export const tarotInitialState: ITarotState = {
  status: 'SHUFFLING',
};

export const tarotReducer = (
  state: ITarotState,
  action: TarotAction
): ITarotState => {
  switch (action.type) {
    case 'START_SELECTION':
      return { status: 'SELECTING' };
    case 'SHOW_RESULT':
      return { status: 'RESULT' };
    case 'RESET_GAME':
      return { status: 'SHUFFLING' };
    default:
      return state;
  }
};
