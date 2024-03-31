import {AxiosError} from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IUser} from "@/interfaces/userInterface";
import {userService} from "@/services/userService";

interface IState {
    users: IUser[]
}

const initialState: IState = {
    users: []
};

const getUsers = createAsyncThunk<IUser[], void>(
    'userSlice/getUsers',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await userService.getAll();
            return data
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error);
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getUsers.fulfilled, (state, action) => {
                state.users = action.payload
            })
});

const {reducer: userReducer, actions} = userSlice;

const userActions = {
    ...actions,
    getUsers
};

export {
    userReducer,
    userActions
};