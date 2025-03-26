import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action) => {
      const { todoText } = action.payload;
      const newTask = {
        id: nanoid(),
        task: todoText,
        completed: false,
        priorityLevel: 1,
      };
      state.todos.push(newTask);
    },
    update: (state, action) => {
      const { id, todoText } = action.payload;

      state.todos = state.todos.map((todoItem) => {
        if (todoItem.id === id) {
          return { ...todoItem, task: todoText };
        }
        return todoItem;
      });
    },
    remove: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.filter((todoItem) => todoItem.id !== id);
    },
    toggle: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.map((todoItem) => {
        if (todoItem.id === id) {
          return { ...todoItem, completed: !todoItem.completed };
        }
        return todoItem;
      });
    },
    setPriority: (state, action) => {
      state.todos = state.todos.map((todoItem) => {
        const { id, priorityLevel } = action.payload;
        if (todoItem.id === id) {
          return { ...todoItem, priorityLevel };
        }
        return todoItem;
      });
    },
    setTodoList: (state, action) => {
      if (state.todos.length <= 0) {
        state.todos = action.payload.todoList;
      }
    },
  },
});

export const { add, remove, toggle, update, setPriority, setTodoList } =
  todoSlice.actions;

// console.log(add({todoText: "ajhsgd fha"}));

export default todoSlice.reducer;
