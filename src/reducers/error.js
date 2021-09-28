

import { createSlice } from '@reduxjs/toolkit';

const errorState = { errors: null };

const errorSlice = createSlice({
    name: 'error',
    initialState: errorState,
    reducers:{
        setError(state, action){
            return { ...state, errors: action.payload}
        },
        resetError(state){
            return { ...state, errors: null}
        }
    }
})

export const errorActions = errorSlice.actions;

export default errorSlice.reducer;