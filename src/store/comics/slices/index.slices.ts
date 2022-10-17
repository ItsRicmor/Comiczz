import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ComicFormat } from '../../../constants/ComicFormatTypes.enum'
import { ComicResponsePayload, ComicState } from '../models'
import { getComics } from './comics.effetcs'

export const initialState: ComicState = {
    isLoading: false,
    hasError: false,
    error: '',
    items: [],
    total: 0,
    formatSelected: ComicFormat.All
}

export const comicSlice = createSlice({
    name: 'comics',
    initialState,
    reducers: {
        selectFormat(state, action: PayloadAction<ComicFormat>) {
            state.formatSelected = action.payload;
        },
        cleanComics(state) {
            state.items = [];
        }
    },
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

export const { cleanComics, selectFormat } = comicSlice.actions
