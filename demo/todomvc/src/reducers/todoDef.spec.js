import { actions, reducer } from './todoDef';

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(reducer(undefined, {})).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 0,
      },
    ]);
  });

  it('should handle ADD_TODO', () => {
    expect(reducer([], actions.addTodo('Run the tests'))).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0,
      },
    ]);

    expect(
      reducer(
        [
          {
            text: 'Use Redux',
            completed: false,
            id: 0,
          },
        ],
        actions.addTodo('Run the tests')
      )
    ).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 0,
      },
      {
        text: 'Run the tests',
        completed: false,
        id: 1,
      },
    ]);

    expect(
      reducer(
        [
          {
            text: 'Use Redux',
            completed: false,
            id: 0,
          },
          {
            text: 'Run the tests',
            completed: false,
            id: 1,
          },
        ],
        actions.addTodo('Fix the tests')
      )
    ).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 0,
      },
      {
        text: 'Run the tests',
        completed: false,
        id: 1,
      },
      {
        text: 'Fix the tests',
        completed: false,
        id: 2,
      },
    ]);
  });

  it('should handle DELETE_TODO', () => {
    expect(
      reducer(
        [
          {
            text: 'Use Redux',
            completed: false,
            id: 0,
          },
          {
            text: 'Run the tests',
            completed: false,
            id: 1,
          },
        ],
        actions.deleteTodo(1)
      )
    ).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 0,
      },
    ]);
  });

  it('should handle EDIT_TODO', () => {
    expect(
      reducer(
        [
          {
            text: 'Run the tests',
            completed: false,
            id: 1,
          },
          {
            text: 'Use Redux',
            completed: false,
            id: 0,
          },
        ],
        actions.editTodo(1, 'Fix the tests')
      )
    ).toEqual([
      {
        text: 'Fix the tests',
        completed: false,
        id: 1,
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 0,
      },
    ]);
  });

  it('should handle COMPLETE_TODO', () => {
    expect(
      reducer(
        [
          {
            text: 'Run the tests',
            completed: false,
            id: 1,
          },
          {
            text: 'Use Redux',
            completed: false,
            id: 0,
          },
        ],
        actions.completeTodo(1)
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: true,
        id: 1,
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 0,
      },
    ]);
  });

  it('should handle COMPLETE_ALL_TODOS', () => {
    expect(
      reducer(
        [
          {
            text: 'Run the tests',
            completed: true,
            id: 1,
          },
          {
            text: 'Use Redux',
            completed: false,
            id: 0,
          },
        ],
        actions.completeAllTodos()
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: true,
        id: 1,
      },
      {
        text: 'Use Redux',
        completed: true,
        id: 0,
      },
    ]);

    // Unmark if all todos are currently completed
    expect(
      reducer(
        [
          {
            text: 'Run the tests',
            completed: true,
            id: 1,
          },
          {
            text: 'Use Redux',
            completed: true,
            id: 0,
          },
        ],
        actions.completeAllTodos()
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 1,
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 0,
      },
    ]);
  });

  it('should handle CLEAR_COMPLETED', () => {
    expect(
      reducer(
        [
          {
            text: 'Run the tests',
            completed: true,
            id: 1,
          },
          {
            text: 'Use Redux',
            completed: false,
            id: 0,
          },
        ],
        actions.clearCompleted()
      )
    ).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 0,
      },
    ]);
  });

  it('should not generate duplicate ids after CLEAR_COMPLETED', () => {
    expect(
      [
        actions.completeTodo(0),
        actions.clearCompleted(),
        actions.addTodo('Write more tests'),
      ].reduce(reducer, [
        {
          id: 0,
          completed: false,
          text: 'Use Redux',
        },
        {
          id: 1,
          completed: false,
          text: 'Write tests',
        },
      ])
    ).toEqual([
      {
        text: 'Write tests',
        completed: false,
        id: 1,
      },
      {
        text: 'Write more tests',
        completed: false,
        id: 2,
      },
    ]);
  });
});
