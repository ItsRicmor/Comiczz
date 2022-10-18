import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ComicFormat } from '../../../constants/ComicFormatTypes.enum'
import { ComicResponsePayload, ComicState } from '../models'
import { getComics } from './comics.effetcs'

export const initialState: ComicState = {
    isLoading: false,
    items: [],
    total: 0,
    offset: 0,
    formatSelected: ComicFormat.All
}

export const comicSlice = createSlice({
    name: 'comics',
    initialState,
    reducers: {
        nextPage(state) {
            state.offset += 20;
        },
        selectFormat(state, action: PayloadAction<ComicFormat>) {
            state.formatSelected = action.payload;
        },
        cleanComics(state) {
            state.items = [];
            state.offset = 0;
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

export const { cleanComics, selectFormat, nextPage } = comicSlice.actions
