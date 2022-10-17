import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ComicResponsePayload, ComicState } from '../models'
import { getComics } from './comics.effetcs'

export const initialState: ComicState = {
    isLoading: false,
    hasError: false,
    error: '',
    items: [],
    total: 0
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
            .addCase(getComics.fulfilled, (state, action: PayloadAction<ComicResponsePayload>) => {
                return {
                    ...state,
                    isLoading: false,
                    total: action.payload.total,
                    items: [...state.items, ...action.payload.items]
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
