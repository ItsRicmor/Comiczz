import { createAsyncThunk } from "@reduxjs/toolkit";
import { ComicPayload, ComicState } from "../models";
import { ComicService, IComicService } from "../services/ComicService";
import { cleanComics, selectFormat } from "./index.slices";


export const getComics = createAsyncThunk(
    'comics/getComics',
    async (data: ComicPayload, ApiThunk) => {
        const { comics: { formatSelected } } = ApiThunk.getState() as { comics: ComicState };

        if (data.format !== formatSelected) {
            ApiThunk.dispatch(cleanComics());
            ApiThunk.dispatch(selectFormat(data.format));
        }
        
        const service: IComicService = new ComicService(data);
        return await service.requestComics();
    }
);
