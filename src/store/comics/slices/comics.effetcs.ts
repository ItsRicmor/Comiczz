import { createAsyncThunk } from "@reduxjs/toolkit";
import { ComicFormat } from "../../../constants/ComicFormatTypes.enum";
import { ComicState } from "../models";
import { ComicService, IComicService } from "../services/ComicService";
import { cleanComics, selectFormat } from "./index.slices";


export const getComics = createAsyncThunk(
    'comics/getComics',
    async (format: ComicFormat, ApiThunk) => {
        const { comics: { formatSelected, offset } } = ApiThunk.getState() as { comics: ComicState };

        if (format !== formatSelected) {
            ApiThunk.dispatch(cleanComics());
            ApiThunk.dispatch(selectFormat(format));
        }

        const service: IComicService = new ComicService(format, offset);
        return await service.requestComics();
    }
);
