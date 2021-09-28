

import { createSlice } from '@reduxjs/toolkit';

const userState = { user: null, isLogin: false };

const userSlice = createSlice({
    name: 'user',
    initialState: userState,
    reducers:{
        fetchuser(state, action){
            return {...state, user: action.payload, isLogin: true};
        },
        register(state, action){
            return {...state, user: null, isLogin: false};
        },
        login(state, action){
            return {...state, user: action.payload, isLogin: true};
        },
    }
})

export const userActions = userSlice.actions;

export default userSlice.reducer;