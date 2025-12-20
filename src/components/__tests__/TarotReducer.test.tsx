// src/reducers/__tests__/tarotReducer.test.ts
import { tarotReducer, tarotInitialState } from '../../reducers/tarotReducers';
import { expect, it, describe } from 'vitest';

describe('tarotReducer', () => {
  it('debe cambiar a SELECTING al disparar START_SELECTION', () => {
    // Arrange
    const action = { type: 'START_SELECTION' as const };

    // Act
    const newState = tarotReducer(tarotInitialState, action);

    // Assert
    expect(newState.status).toBe('SELECTING');
  });

  it('debe mostrar los resultados al disparar SHOW_RESULT', () => {
    const currentState = { status: 'SELECTING' as const };
    const action = { type: 'SHOW_RESULT' as const };

    const newState = tarotReducer(currentState, action);

    expect(newState.status).toBe('RESULT');
  });

  it('debe reiniciar a SHUFFLING al disparar RESET_GAME', () => {
    const currentState = { status: 'RESULT' as const };
    const action = { type: 'RESET_GAME' as const };

    const newState = tarotReducer(currentState, action);

    expect(newState.status).toBe('SHUFFLING');
  });
});
