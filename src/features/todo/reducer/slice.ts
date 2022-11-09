import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../models/task';

const initialState: Array<Task> = [];

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Task>) => {
            // Opción válida convertida en inmutable por Immer.js
            // state.push(action.payload)
            // return state
            return [...state, action.payload];
        },
        delete: (state, action: PayloadAction<Task['id']>) =>
            state.filter((item) => item.id !== action.payload),
        update: (state, action: PayloadAction<Task>) =>
            state.map((item) =>
                item.id === action.payload.id ? action.payload : item
            ),
        load: (_state, action: PayloadAction<Array<Task>>) => action.payload,
    },
});

export const { reducer: taskReducer } = tasksSlice;
