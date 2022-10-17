import { createAsyncThunk } from "@reduxjs/toolkit";
import { ComicPayload } from "../models";
import { ComicService, IComicService } from "../services/ComicService";


export const getComics = createAsyncThunk(
    'comics/getComics',
    async (data: ComicPayload, __) => {
        const service: IComicService = new ComicService(data);
        return await service.requestComics();
    }
);
