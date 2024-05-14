import { createSlice, nanoid } from '@reduxjs/toolkit'
import { Task } from '../../types'


const initialState: Task[] = [
  {
    id: nanoid(),
    description: 'Hello World',
    completed: false,
  },
]  

export const taskSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const task = {
        id: nanoid(),
        description: action.payload,
        completed: false,
      }
      state.push(task);
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
  },
})

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;