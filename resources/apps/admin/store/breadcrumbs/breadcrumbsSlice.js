import {createSlice} from '@reduxjs/toolkit';

export const breadcrumbsSlice = createSlice({
  name: 'breadcrumbs',
  initialState: {
    name: 'Dashboard',
    hasAction: false,
    actionBtn: (event) => {
      event.preventDefault()
      console.log('No Action')
    }
  },
  reducers: {
    onSetBreadCrumbs: (state, {payload}) => {
      state.name = payload.name
      state.hasAction = payload.hasAction

      if (payload.actionBtn) {
        state.actionBtn = payload.actionBtn
      }
    }
  }
});

export const {onSetBreadCrumbs} = breadcrumbsSlice.actions;
