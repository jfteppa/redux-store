// actions constants
export const ADD_TODO = "[Todo] ADD_TODO";
export const REMOVE_TODO = "[Todo] REMOVE_TODO";

// action creators
export class AddTodo {
  readonly type = ADD_TODO;
  constructor(private payload: any) {}
}

// console.log(new AddTodo({}));
// AddTodo {payload: {…}, type: "[Todo] ADD_TODO"}

export class RemoveTodo {
  readonly type = REMOVE_TODO;
  constructor(private payload: any) {}
}
