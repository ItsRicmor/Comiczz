import { createSlice } from '@reduxjs/toolkit'
import { ComicState } from '../models'
import { getComics } from './comics.effetcs'

export const initialState: ComicState = {
    isLoading: false,
    hasError: false,
    error: '',
    items: []
}

export const comicSlice = createSlice({
    name: 'comics',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getComics.pending, (state) => {
                return {
                    ...state,
                    isLoading: true
                };
            })
            .addCase(getComics.fulfilled, (state, action) => {
                return {
                    ...state,
                    isLoading: false,
                    items: [...state.items, ...action.payload]
                }
            })
            .addCase(getComics.rejected, (state, action) => {
                return {
                    ...state,
                    isLoading: false,
                }
            });
    }
})
