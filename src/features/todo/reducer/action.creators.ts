import { createAction } from '@reduxjs/toolkit';
import { Task } from '../models/task';
import { actionTypes } from './action.types';

export const loadActionCreator = createAction<Array<Task>>(actionTypes.load);

export const addActionCreator = createAction<Task>(actionTypes.add);

export const updateActionCreator = createAction<Task>(actionTypes.update);

export const deleteActionCreator = createAction<Task['id']>(actionTypes.delete);
