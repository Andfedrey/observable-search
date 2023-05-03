import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import skills from './slices/skillSlice'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import myEpic from './slices/epic';

const epicMiddleware = createEpicMiddleware();
const rootEpic = combineEpics(myEpic);

const store = configureStore({
  reducer: {skills},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(epicMiddleware),
})

epicMiddleware.run(rootEpic)

export default store;